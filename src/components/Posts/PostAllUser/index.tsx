import react from 'react';
import {PostDTO} from '../../../dtos/postDTO'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';

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
  Title,
  Data,
  ButtonConfig,
  WrapperUser,
  WrapperActive
} from './styles'
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';


interface PostUserProps extends RectButtonProps{
    data: PostDTO;
    isLoading?: boolean
}

export function PostAllUser({data,}: PostUserProps){

    const theme = useTheme()
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
            @{data.user.userName}
        </UserName>
       
    </Header>
    <PostContent>
        {!data.imagePost ? 
        <></>:
        <ImagePost source={{uri: 'data:image/jpeg;base64,' + data.imagePost}}/>
        }
        
        <TextPost>
        {data.textPost}
        </TextPost>
    </PostContent>
    <Footer>
        <ComentContent>
        <AntDesign 
        name="message1"
        size={20}
        />
        <Title>0 Comentarios</Title>
        </ComentContent>
        <Data>{dateFormatted}</Data>
    </Footer>
  
 </Container>
)

}