import react from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';


import {
  Container,
  Icon,
  Title
} from './styles'



export function ButtonImage({...rest}: TouchableOpacityProps){

 return(

 <Container {...rest}>
    <Icon 
    name="camera"
    />
    <Title>Selecionar Imagem</Title>
 </Container>
)

}