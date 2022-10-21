import react from 'react';

import {
  Container,
  Header,
  ImageUser,
  UserName,
  PostContent,
  ImagePost,
  TextPost,
  Footer,
  ComentContent,
  Icon,
  Title,
  Date
} from './styles'

export function PostUser(){

 return(

 <Container>
    <Header>
        <ImageUser />
        <UserName>

        </UserName>
    </Header>
    <PostContent>
        <ImagePost />
        <TextPost>

        </TextPost>
    </PostContent>
    <Footer>
        <ComentContent>
        <Icon />
        <Title></Title>
        </ComentContent>
        <Date></Date>
    </Footer>

 </Container>
)

}