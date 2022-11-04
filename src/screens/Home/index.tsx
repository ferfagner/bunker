import react, { useState, useEffect, useCallback } from 'react';
import { ButtonConfig } from '../../components/ConfigurationButton';
import { InfoSocial } from '../../components/InfoSocial';
import { PostUser } from '../../components/Posts/PostUser';
import { NewPostButton } from '../../components/Posts/NewPostButton';
import { UserDTO } from '../../dtos/userDTO';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

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
  PostsList,
  TextPost,
  FooteButton
} from './styles'
import { api } from '../../services/api';
import { PostDTO } from '../../dtos/postDTO';
import { FlatList } from 'react-native-gesture-handler';

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
  const [isLoading, setIsLoading] = useState(true)

  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const routes = useRoute()
  const {user} = routes.params as Params

 
  
  
  
  

  function handleNewPost(){
    navigation.navigate('NewPost', {user})
  }

  async function leadPosts(){

    try {
      
      const response = await api.get(`posts?userId=${user.id}`)

      setAllposts(response.data)
      setIsLoading(false)
  
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

  <Header imageHeader="https://faculdadecristadecuritiba.com.br/storage/2021/02/Igreja-Local-770x367.png">
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
  <TextPost>
    Suas Postagens
  </TextPost>
  {isLoading ?
  <FlatList 
  data={allposts.reverse()}
  inverted={false}
  keyExtractor={item => item.id}
  renderItem={({item})=> 
  <PostUser 
  data={item}
  />
  }
  />: 
  <ActivityIndicator 
  color={theme.colors.primary}
  />
  }
    
 
  
  <FooteButton>
    <NewPostButton
    onPress={handleNewPost}
    />
  </FooteButton>
  

 </Container>
)

}