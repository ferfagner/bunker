import react, { useState } from 'react';
import {
    Alert,
    Keyboard, 
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback} from 'react-native'

import { InputForm } from '../../components/Form/InputForm';

import { useForm } from 'react-hook-form';

import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';

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
    avatar: string
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

        auth().createUserWithEmailAndPassword(email, senha)
        .then(async ({user}) => {

            await  firestore()
            .collection('users')
            .doc(user.uid)
            .set({
                name,
                userName
            })


            Alert.alert('Usuario cadastrado com sucesso')

            

            navigation.navigate('Login')
            setIsLoading(false)
        })
        .catch(error => {
            console.log(error)
            if(error.code === 'auth/email-already-in-use'){
              Alert.alert('esse e-mail j?? foi cadastrado!')
            }
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
    <Label>Nome de Usu??rio:</Label>
    <InputForm 
    name='userName'
    control={control}
    placeholder="Digite seu nome de usu??rio!"
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
   { //<ButtonWrapper>
    //<ButtonImage 
    //onPress={pickImage}
    ///>
    //</ButtonWrapper>
    }
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