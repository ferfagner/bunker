import react, { useState } from 'react';
import {
    Keyboard, 
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback} from 'react-native'

import { InputForm } from '../../components/Form/InputForm';

import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import uuid from 'react-native-uuid';
import { yupResolver } from "@hookform/resolvers/yup";

import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Title,
  Label,
  FormWrapper,
  ButtonWrapper
} from './styles'
import { FormButton } from '../../components/Form/FormButton';
import { ButtonImage } from '../../components/AddImageButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { schema } from './schema';


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
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

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

    async function handleRegisterUser({name, userName, email, senha}: UserProps) {


        setIsLoading(false)

        await api.post('/users',{
            id: uuid.v4(),
            idIgreja: null,
            name: name,
            userName: userName,
            email: email,
            senha: senha,
            image: image

        }).then(response => {
            setIsLoading(true)
            navigation.navigate('Login')
            
        })


        
    }

    

    const {
        control,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })
 return(
 //<KeyboardAvoidingView behavior='position' enabled>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
 
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
    error={errors.name && errors.name.message.toString()}
    />
    <Label>Nome de Usuário:</Label>
    <InputForm 
    name='userName'
    control={control}
    placeholder="Digite seu nome de usuário!"
    autoCorrect={false}
    autoCapitalize="none"
    error={errors.userName && errors.userName.message.toString()}
    />
     <Label>E-Mail:</Label>
    <InputForm 
    name='email'
    control={control}
    placeholder="Digite seu e-mail!"
    autoCorrect={false}
    autoCapitalize="none"
    error={errors.email && errors.email.message.toString()}
    />
    <Label>Senha:</Label>
    <InputForm 
    name="senha"
    control={control}
    placeholder="Digite sua senha!"
    autoCorrect={false}
    secureTextEntry={true}
    autoCapitalize="none"
    error={errors.senha && errors.senha.message.toString()}
    />
    <Label>Confirmar Senha:</Label>
    <InputForm 
    name="confSenha"
    control={control}
    placeholder="Digite sua senha novamente!"
    autoCorrect={false}
    secureTextEntry={true}
    autoCapitalize="none"
    error={errors.confSenha && errors.confSenha.message.toString()}
    />
    </FormWrapper>
    <ButtonWrapper>
    <ButtonImage 
    onPress={pickImage}
    />
    </ButtonWrapper>
    <FormButton 
    enabled={isLoading}
    loading={isLoading}
    title='Criar Conta'
    onPress={handleSubmit(handleRegisterUser)}
    />

 </Container>
 
 </TouchableWithoutFeedback>
 //</KeyboardAvoidingView>
)

}