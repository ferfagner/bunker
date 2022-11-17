import react, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Icon,
  Title,
  CreatComments,
  ButtonSendPost,
} from './styles'
import { PostUser } from '../../components/Posts/PostUser';
import { PostDTO } from '../../dtos/postDTO';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Keyboard, ListView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { InputComment } from '../../components/Comment/InputComment';
import { MaterialIcons } from '@expo/vector-icons';
import { api } from '../../services/api';
import uuid from 'react-native-uuid';
import { commentsDTO } from '../../dtos/commentsDTO';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ViewComments } from '../../components/Comment/ViewComments';

interface Params{
    post: PostDTO
}

interface AllComments{
    comment: commentsDTO
}

interface CommentProps{
    textComment: string;
}

export function Comment(){
    const routes = useRoute()
    const {post} = routes.params as Params
    const [allComments, setAllComments] = useState<commentsDTO[]>()

    

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
} = useForm({
    resolver: yupResolver(schema)
})
    
   async function handleSendPost({textComment} : CommentProps){
   try {
    await api.post('/comments',{
        id: uuid.v4(),
        idUser: post.userId,
        idPost: post.id,
        textComment,
        userName: post.user.userName,
        userPhoto: post.user.image,
        date: new Date(),

    }).then(response => {
        reset({
            textComment: ''
        })
    })
   } catch (error) {
    
   }
    }

    const navigation = useNavigation()

    function handleBack(){
        navigation.goBack()
    }

    async function loadComments(){
        try {
            const response = await api.get(`comments?idPost=${post.id}`)
            setAllComments(response.data)
        } catch (error) {
            
        }
    }

    useFocusEffect(
        useCallback(() => {
            loadComments();
        },[])
      );

    

 return(
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Container>
    <Header>
    <TouchableOpacity
    onPress={handleBack}
    >
    <Icon 
    name="leftcircleo"
    />
    </TouchableOpacity>
    <Title>Todas as Postagens!</Title>
    </Header>
    <PostUser
    data={post}
     />
    <CreatComments>
    <InputComment
    name='textComment'
    control={control}
    autoCorrect={true}
    placeholder='Inserira seu comentário'
    error={errors.textComment && errors.textComment.message.toString()}
    />
    <ButtonSendPost
    onPress={handleSubmit(handleSendPost)}
    >
    <MaterialIcons 
    name="send" 
    size={24} 
    color="black" />
    </ButtonSendPost>
    </CreatComments>
    <FlatList
    data={allComments}
    keyExtractor={item => item.id}
    renderItem={({item})=> 
    <ViewComments 
    data={item}
    />
    }
    showsVerticalScrollIndicator={false}
    
    />
 </Container>
 </TouchableWithoutFeedback>
)

}