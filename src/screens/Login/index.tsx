import react, { useState } from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native'

import Logo from '../../assets/logo.svg'

import { FormButton } from '../../components/Form/FormButton';

import {InputForm} from '../../components/Form/InputForm'
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import { Alert } from 'react-native';
import { UserDTO } from '../../dtos/userDTO';

import {
  Container,
  FormWrapper,
  ButtonWrapper,
  NotAccoutWrapper,
  NotAccoutText,
  LogoWrapper,
  Strong
} from './styles'


interface FormLogin {
  email: string,
  senha: string
}

export function Login(){
  const [user, setUser] = useState<UserDTO>()
  const {
    control,
    handleSubmit,
    reset
  } = useForm()


  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleRegister(){
      navigation.navigate('Register')
    
  }


  async function handleAcess({email, senha}: FormLogin){
    
    try {

      const response = await api.get(`users?email=${email}&senha=${senha}`)
      
        setUser(response.data[0])
      
         
         
    } catch (error) {
      console.log(error)
    }finally{
      navigation.navigate('Home', {user})
    }
  
  }

 return(
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
 <Container >


  <LogoWrapper>
  <Logo 
  width={RFValue(250)}
  height={RFValue(250)}
  />
  </LogoWrapper>
  <FormWrapper>
    
    <InputForm 
    name='email'
    control={control}
    placeholder="Digite seu E-mail!"
    autoCorrect={false}
    autoCapitalize="none"
    />

    <InputForm 
    name="senha"
    control={control}
    placeholder="Digite sua Senha!"
    autoCorrect={false}
    secureTextEntry={false}
    />
    
    <ButtonWrapper>

    <FormButton
    title="Entrar"
    onPress={handleSubmit(handleAcess)}
    />

  </ButtonWrapper>
  
</FormWrapper>  

    <NotAccoutWrapper
    onPress={handleRegister}
    >

      <NotAccoutText>
      Novo(a) por aqui? <Strong>Faça sua conta agora!</Strong>
      </NotAccoutText>
    </NotAccoutWrapper>

    
 </Container>
 </TouchableWithoutFeedback>
)

}