import react, { useCallback, useEffect, useState, memo, useMemo } from 'react';
import {PostDTO} from '../../../dtos/postDTO'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import 'intl';
import 'intl/locale-data/jsonp/en';
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
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { api } from '../../../services/api';
import { useFocusEffect } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

interface PostUserProps extends TouchableOpacityProps{
    data: PostDTO;
    isLoading?: boolean
    Comment?: () => void
}

function PostUserComponent({data, isLoading = false, onPress, Comment, ...rest}: PostUserProps){


    const [qntComments, setQntComments] = useState(0)
    const theme = useTheme()
   // const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    //    day: "2-digit",
   //     month: "2-digit",
    //    year: "numeric",
   //     hour: "2-digit",
   //     minute: "numeric"
   //   }).format(new Date(data.date));

    

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
        <ImageUser source={{uri: 'data:image/jpeg;base64,' }}/>
        
        <UserName>
          
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
        <ImagePost source={{uri: data.imagePost}}/>
        }
        
        <TextPost>
        {data.textPost}
        </TextPost>
    </PostContent>
    <Footer>
        <ComentContent
        onPress={Comment}
        >
        <AntDesign 
        name="message1"
        size={20}
        />
        <Title>{qntComments} Comentarios</Title>
        </ComentContent>
        <Data>{data.date}</Data>
    </Footer>
  
 </Container>
)

}

export const PostUser = memo(PostUserComponent, (prevProps, nextProps)=>{
    return Object.is(prevProps.data, nextProps.data)
})