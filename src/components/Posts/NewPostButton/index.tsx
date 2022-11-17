import react from 'react';
import { Entypo } from '@expo/vector-icons';
import {  TouchableOpacityProps } from 'react-native';

import {
  Container
} from './styles'


export function NewPostButton({...rest}: TouchableOpacityProps){

 return(

 <Container {...rest}>

    <Entypo 
    name="plus" 
    size={24} 
    color="white" />

 </Container>
)

}