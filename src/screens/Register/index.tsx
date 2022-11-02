import react, { useState } from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native'

import { InputForm } from '../../components/Form/InputForm';

import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import uuid from 'react-native-uuid';

import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Title,
  Label,
  FormWrapper,
  ButtonWrapper
} from './styles'
import { FormButton } from '../../components/Form/FormButton';
import { ButtonImage } from '../../components/ButtonImage/indes';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';


interface UserProps{
    id: string,
    idIgreja: string,
    name: string,
    userName: string,
    email: string,
    senha: string,
    confSenha: string,
    image: string
}

export function Register(){

    const navigation = useNavigation<NavigationProp<ParamListBase>>()
    const [user, setUser] = useState<UserProps>({} as UserProps)
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

    async function handleRegisterUser({name, userName, email, senha, confSenha}: UserProps) {


        
        await api.post('/users',{
            id: uuid.v4(),
            idIgreja: null,
            name: name,
            userName: userName,
            email: email,
            senha: senha,
            image: image

        }).then(response => {
            navigation.navigate('Login')
        })


        
    }

    

    const {
        control,
        handleSubmit,
        reset
    } = useForm()
 return(
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
 <Container>
    <Title>Criar uma nova Conta!</Title>
    <FormWrapper>
    <Label>Nome:</Label>
    <InputForm 
    name='name'
    control={control}
    placeholder="Digite seu nome completo!"
    autoCorrect={false}
    autoCapitalize="words"
    
    />
    <Label>Nome de Usuário:</Label>
    <InputForm 
    name='userName'
    control={control}
    placeholder="Digite seu nome de usuário!"
    autoCorrect={false}
    autoCapitalize="none"
    />
     <Label>E-Mail:</Label>
    <InputForm 
    name='email'
    control={control}
    placeholder="Digite seu e-mail!"
    autoCorrect={false}
    autoCapitalize="none"
    />
    <Label>Senha:</Label>
    <InputForm 
    name="senha"
    control={control}
    placeholder="Digite sua senha!"
    autoCorrect={false}
    secureTextEntry={false}
    />
    <Label>Confirmar Senha:</Label>
    <InputForm 
    name="confSenha"
    control={control}
    placeholder="Digite sua senha novamente!"
    autoCorrect={false}
    secureTextEntry={false}
    />
    </FormWrapper>
    <ButtonWrapper>
    <ButtonImage 
    onPress={pickImage}
    />
    </ButtonWrapper>
    <FormButton 
    title='Criar Conta'
    onPress={handleSubmit(handleRegisterUser)}
    />

 </Container>
 </TouchableWithoutFeedback>
)

}