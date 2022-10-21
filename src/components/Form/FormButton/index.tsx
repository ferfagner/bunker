import react from 'react';

import {RectButtonProps} from 'react-native-gesture-handler'

import {
  Button,
  Title
} from './styles'

interface Props extends RectButtonProps{

  color?: string,
  title: string


}

export function FormButton({color, title, ...rest}: Props){

 return(
 
    <Button {...rest}
    color={color}
    >
      <Title>
        {title}
      </Title>
    </Button>

)

}