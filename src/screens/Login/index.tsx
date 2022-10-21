import react from 'react';

import Logo from '../../assets/logo.svg'

import { FormButton } from '../../components/Form/FormButton';

import {Input} from '../../components/Form/Input'
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container,
  FormWrapper,
  ButtonWrapper,
  NotAccoutWrapper,
  NotAccoutText,
  LogoWrapper,
  Strong
} from './styles'

export function Login(){

 return(

 <Container>


  <LogoWrapper>
  <Logo 
  width={RFValue(250)}
  height={RFValue(250)}
  />
  </LogoWrapper>
  <FormWrapper>

    <Input 
    placeholder='E-mail'
    />

    <Input 
    placeholder="Senha"
    
    />

    <ButtonWrapper>

    <FormButton
    title="Entrar"
    />

  </ButtonWrapper>

</FormWrapper>  

    <NotAccoutWrapper>

      <NotAccoutText>
      Novo(a) por aqui? <Strong>Faça sua conta agora!</Strong>
      </NotAccoutText>
    </NotAccoutWrapper>


 </Container>
)

}