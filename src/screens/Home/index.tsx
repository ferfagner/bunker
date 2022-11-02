import react, { useState, useEffect } from 'react';
import { ButtonConfig } from '../../components/ButtonConfi';
import { InfoSocial } from '../../components/InfoSocial';
import { PostUser } from '../../components/Posts/PostUser';
import { NewPostButton } from '../../components/Posts/NewPostButton';
import { UserDTO } from '../../dtos/userDTO';

import { useNavigation, ParamListBase, NavigationProp, useRoute } from '@react-navigation/native';

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

  

  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  const routes = useRoute()
  const {user} = routes.params as Params
  console.log(user)
  function handleNewPost(){
    navigation.navigate('NewPost', {user})
  }

  useEffect(()=>{
  
  
  },[])

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
  <InfoSocial/>
  </InfoSocialContent>
  <TextPost>
    Suas Postagens
  </TextPost>
  
 
  
  <FooteButton>
    <NewPostButton
    onPress={handleNewPost}
    />
  </FooteButton>
  

 </Container>
)

}