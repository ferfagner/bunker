import react from 'react';
import {PostDTO} from '../../../dtos/postDTO'
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
  Data
} from './styles'

interface PostUserProps {
    data: PostDTO;
}

export function PostUser({data}: PostUserProps){

   
    const dateFormatted = Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "numeric"
      }).format(new Date(data.date));

 return(

 <Container>
    <Header>
        <ImageUser source={{uri: 'data:image/jpeg;base64,' + data.user.image}}/>
        <UserName>
            @FerFagner
        </UserName>
    </Header>
    <PostContent>
        <ImagePost source={{uri: 'data:image/jpeg;base64,' + data.imagePost}}/>
        <TextPost>
        {data.textPost}
        </TextPost>
    </PostContent>
    <Footer>
        <ComentContent>
        <Icon 
        name="message1"
        />
        <Title>0 Comentarios</Title>
        </ComentContent>
        <Data>{dateFormatted}</Data>
    </Footer>

 </Container>
)

}