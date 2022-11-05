import react, { useState, useEffect, useCallback } from 'react';
import { ButtonConfig } from '../../components/ConfigurationButton';
import { InfoSocial } from '../../components/InfoSocial';
import { PostUser } from '../../components/Posts/PostUser';
import { NewPostButton } from '../../components/Posts/NewPostButton';
import { UserDTO } from '../../dtos/userDTO';
import { ActivityIndicator} from 'react-native';
import { useTheme } from 'styled-components';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  event
} from 'react-native-reanimated';{}

import { useNavigation, ParamListBase, NavigationProp, useRoute, useFocusEffect } from '@react-navigation/native';

import {
  Container,
  Header,
  ContentUser,
  Image,
  UserGraeting,
  UserName,
  UserInfo,
  User,
  ButtonConfigWrapper,
  InfoSocialContent,
  TextPost,
  FooteButton,
  ActiveWrapper
} from './styles'
import { api } from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';

interface Params{
  user: UserDTO
}

interface UserParams{
    id: string;
    idIgreja: string;
    name: string;
    userName: string;
    email: string;
    senha: string;
    image: string
}


export function Home(){

  const [allposts, setAllposts] = useState<PostDTO[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const routes = useRoute()
  const {user} = routes.params as Params

  const scrollY = useSharedValue(0);
  const scollHandle = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimated = useAnimatedStyle(()=> {
    return{
      height: interpolate(
        scrollY.value,
        [0, 200],
        [220,  0],
        Extrapolate.CLAMP
      )
    }
  })

  const infoUserStyleAnimation = useAnimatedStyle(()=>{
      return{
        opacity: interpolate(
          scrollY.value,
          [0, 150],
          [1, 0]
        )
      }
  })
 
  function handleNewPost(){
    navigation.navigate('NewPost', {user})
  }

  async function leadPosts(){

    try {
      
      const response = await api.get(`posts?userId=${user.id}`)

      setAllposts(response.data)
      setIsLoading(true)
      
  
    } catch (error) {
      
      
    }

  }

  useFocusEffect(
    useCallback(() => {
      leadPosts();
    }, [])
  );

 return(
 
 <Container>

<Animated.View
style={[headerStyleAnimated, infoUserStyleAnimation]}
>
  <Header>
    <ContentUser>
      <UserInfo>
      <Image source={{uri: 'data:image/jpeg;base64,' + user.image}}/>
      <User>
      <UserGraeting>Olá,</UserGraeting>
      <UserName>{user.userName}</UserName>
      </User>
      </UserInfo>
      <ButtonConfigWrapper>
      <ButtonConfig />
      </ButtonConfigWrapper>
    </ContentUser>
  </Header>

  <InfoSocialContent>
  <InfoSocial
  qntPosts={allposts.length}
  />
  </InfoSocialContent>
  
  </Animated.View>

  <TextPost>
    Suas Postagens
  </TextPost>
  
  
  {isLoading ?
  <Animated.FlatList
  data={allposts.reverse()}
  keyExtractor={item => item.id}
  renderItem={({item})=> 
  <PostUser 
  data={item}
  />
  }
  onScroll={scollHandle}
  showsVerticalScrollIndicator={false}
  scrollEventThrottle={16}
  />: 
  <ActiveWrapper>
  <ActivityIndicator 
  size="large"
  color={theme.colors.button}
  />
  </ActiveWrapper>
  }
    
 
  
  <FooteButton>
    <NewPostButton
    onPress={handleNewPost}
    />
  </FooteButton>
  

 </Container>
)

}