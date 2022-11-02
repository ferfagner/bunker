import react from 'react';
import { Entypo } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container
} from './styles'


export function NewPostButton({...rest}: RectButtonProps){

 return(

 <Container
{...rest}
 >

    <Entypo 
    name="plus" 
    size={24} 
    color="white" />

 </Container>
)

}