import react, { useState, useEffect, useCallback } from 'react';
import { ButtonConfig } from '../../components/ConfigurationButton';
import { InfoSocial } from '../../components/InfoSocial';
import { PostUser } from '../../components/Posts/PostUser';
import { NewPostButton } from '../../components/Posts/NewPostButton';
import { UserDTO } from '../../dtos/userDTO';
import { ActivityIndicator,  BackHandler} from 'react-native';
import { useTheme } from 'styled-components';
import {AntDesign} from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';{}

import { useNavigation, ParamListBase, NavigationProp, useRoute, useFocusEffect, useScrollToTop } from '@react-navigation/native';

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
  ActiveWrapper,
  ButtonTop,
  TitleWrapper

} from './styles'
import { api } from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';
import { useAuth } from '../../hooks/auth';

interface Params{
  user: UserDTO
}



export function Home(){

  const [allposts, setAllposts] = useState<PostDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingPost, setIsLoadingPost] = useState(false)
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const {user} = useAuth()

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

  const buttonTopStyleAnimation = useAnimatedStyle(()=>{
    return{
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [0, 1]
      )
    }
})
 
  function handleNewPost(){
    navigation.navigate('NewPost', {user})
  }

  function handleAllPosts(){
    navigation.navigate('AllPosts')
  }

  function handleTop(){
    scrollY.value = 0
    //listRef.current.scrollToOffset({ offset: 0, animated: true })
  
  }

  



  async function handleConfig(id) {
    setIsLoadingPost(true)
    try {
      await api.delete(`posts/${id}`)
      
    } catch (error) {
      
    }
  }

  function handleComment(post: PostDTO){
    navigation.navigate('Comment', {post})

  }

  useFocusEffect(
    useCallback(() => {

      const subscribe = firestore()
      .collection('posts')
      .where('userId', '==', user.id)
      .onSnapshot(querrySnapshot => {
        const data = querrySnapshot.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data()
         }
        }) as PostDTO[];
        console.log('###############',data)
      setAllposts(data)
      setIsLoadingPost(false)
      setIsLoading(true)
      })

      return ()=> subscribe()

    }, [])
  );

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress', ()=> {
        return true
    })
})

 return(
 
 <Container>

<Animated.View
style={[headerStyleAnimated, infoUserStyleAnimation]}
>
  <Header>
    <ContentUser>
      <UserInfo>
      <Image source={{uri: 'data:image/jpeg;base64,' }}/>
      <User>
      <UserGraeting>Ol??,</UserGraeting>
      <UserName>{user.username}</UserName>
      </User>
      </UserInfo>
      <ButtonConfigWrapper>
      <ButtonConfig 
      onPress={handleAllPosts}
      />
      </ButtonConfigWrapper>
    </ContentUser>
  </Header>

  <InfoSocialContent>
  <InfoSocial
  qntPosts={allposts.length}
  />
  </InfoSocialContent>
  
  </Animated.View>

  <TitleWrapper>
  <TextPost>
    Suas Postagens
  </TextPost>
 
  <Animated.View style={[buttonTopStyleAnimation]}>
  <ButtonTop onPress={handleTop}>
  <AntDesign 
  name='upcircleo'
  size={30}
  color={theme.colors.otherText}
  />
  </ButtonTop>
  </Animated.View>

  </TitleWrapper>
  
  {isLoading ?
  <Animated.FlatList
  data={allposts}
  keyExtractor={item => item.id}
  renderItem={({item})=> 
  <PostUser 
  data={item}
  onPress={() => handleConfig(item.id)}
  isLoading={isLoadingPost}
  Comment={() => handleComment(item)}
  />
  }
  onScroll={scollHandle}
  showsVerticalScrollIndicator={false}
  scrollEventThrottle={16}
  initialNumToRender={4}
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