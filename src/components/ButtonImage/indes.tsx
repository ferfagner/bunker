import react from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
  Title
} from './styles'



export function ButtonImage({...rest}: RectButtonProps){

 return(

 <Container {...rest}>
    <Icon 
    name="camera"
    />
    <Title>Selecionar Imagem</Title>
 </Container>
)

}