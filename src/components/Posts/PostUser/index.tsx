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

export function PostUser({data, isLoading = false, onPress, ...rest}: PostUserProps){

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
    {
        isLoading &&
        <WrapperActive>
        <ActivityIndicator
        size="large"
        color={theme.colors.button}
        /> 
        </WrapperActive>
    }
    <Header>
        <WrapperUser>
        <ImageUser source={{uri: 'data:image/jpeg;base64,' + data.user.image}}/>
        <UserName>
            @{data.user.userName}
        </UserName>
        </WrapperUser>
        <ButtonConfig 
        {...rest}
        onPress={onPress}
        >
        <Ionicons 
        //name="ellipsis-vertical-outline"
        name="trash-outline"
        size={20}
        />
       
        </ButtonConfig>
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