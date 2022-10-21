import react from 'react';
import { ButtonConfig } from '../../components/ButtonConfi';
import { InfoSocial } from '../../components/InfoSocial';
import { PostUser } from '../../components/PostUser';


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
  PostsContent,
  TextPost
} from './styles'



export function Home(){

 return(

 <Container>

  <Header imageHeader="https://faculdadecristadecuritiba.com.br/storage/2021/02/Igreja-Local-770x367.png">
    <ContentUser>
      <UserInfo>
      <Image source={{uri : 'https://avatars.githubusercontent.com/u/5932294'}}/>
      <User>
      <UserGraeting>Olá,</UserGraeting>
      <UserName>@ferfagner</UserName>
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
  <PostsContent>
 
  <PostUser />

  </PostsContent>

 </Container>
)

}