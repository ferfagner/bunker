import react from 'react';

import {RectButtonProps} from 'react-native-gesture-handler'

import {
  Button,
  Title
} from './styles'

interface Props extends RectButtonProps{

  color?: string,
  title: string
  onPress: ()=> void;

}

export function FormButton({color, title,onPress, ...rest}: Props){

 return(
 
    <Button {...rest}
    color={color}
    onPress={onPress}
    >
      <Title>
        {title}
      </Title>
    </Button>

)

}