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
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';


interface FormLogin {
  email: string,
  senha: string
}

export function Login(){
  const [user, setUser] = useState<UserDTO>()
  const [isLoading, setIsLoading] = useState(true)
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
} = useForm({
    resolver: yupResolver(schema)
})


  const navigation = useNavigation<NavigationProp<ParamListBase>>()

  function handleRegister(){
      navigation.navigate('Register')
    
  }


  async function handleAcess({email, senha}: FormLogin){
    setIsLoading(true)
    try {

      const response = await api.get(`users?email=${email}&senha=${senha}`)
      setUser(response.data[0])

      if(user){
        setIsLoading(true)
        navigation.navigate('Home', {user})
      }else{
        Alert.alert('e-mail ou senha incorreto!')
      }
        
        
      
        
         
    } catch (error) {
      console.log(error)
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
    error={errors.email && errors.email.message.toString()}
    />

    <InputForm 
    name="senha"
    control={control}
    placeholder="Digite sua Senha!"
    autoCorrect={false}
    secureTextEntry={true}
    autoCapitalize="none"
    error={errors.senha && errors.senha.message.toString()}
    />
    
    <ButtonWrapper>

    <FormButton
    enabled={isLoading}
    loading={isLoading}
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