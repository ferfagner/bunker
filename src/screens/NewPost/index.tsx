import react, { useState } from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native'


import { useForm } from 'react-hook-form';
import { ButtonImage } from '../../components/ButtonImage/indes';
import { FormButton } from '../../components/Form/FormButton';
import { InputPost } from '../../components/Posts/InputPost';
import { api } from '../../services/api';
import uuid from 'react-native-uuid';
import { UserDTO } from '../../dtos/userDTO';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';



import {
  Container,
  Title,
  HeaderUser,
  ImageUser,
  InfoUserWrapper,
  NameUser,
  NameIgreja,
  UserWrapper
} from './styles'



interface Params{
  user: UserDTO
}

interface PostProps{
  post: string
}


export function NewPost(){
  const routes = useRoute()
  const {user} = routes.params as Params

  console.log(user)

  const {
    control,
    handleSubmit,
    reset
  } = useForm()
  
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        aspect: [4,4],
        quality: 1
    });

    if(result.cancelled === false){

        setImage(result.base64)
    }
}

  

  async function handleCreatNewPost({post}: PostProps){

    await api.post('/posts', {
      id: uuid.v4(),
      idIgraja: user.idIgreja,
      userId: user.id,
      textPost: post,
      imagePost: image,
      date: new Date(),
      user: user 
    }).then(response => {
      navigation.goBack()
    })

  }
   

 return(
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
 <Container>
  
    <Title>Criar Publicação</Title>
    <UserWrapper>
    <HeaderUser>
        <ImageUser
        source={{uri: 'data:image/jpeg;base64,' + user.image}}
        />
        <InfoUserWrapper>
            <NameUser>{user.userName}</NameUser>
            <NameIgreja>COMUNIDADE DAS NAÇÕES</NameIgreja>
        </InfoUserWrapper>
    </HeaderUser>
    <InputPost
    placeholder='Compartilhe sua mensagem!'
    name='post'
    control={control}
    />
    <ButtonImage
    onPress={pickImage}
    />
    </UserWrapper>
    <FormButton 
    title='criar publicação'
    onPress={handleSubmit(handleCreatNewPost)}
    />

 </Container>
 </TouchableWithoutFeedback>
)

}