import react from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon
} from './styles'

interface Props extends RectButtonProps{
  onPress: () => void;
}



export function ButtonConfig({onPress, ...rest}: Props){

 return(

 <Container
 onPress={onPress}
 >
    
      <Icon 
      name="menu"
      />
    
 </Container>
)

}