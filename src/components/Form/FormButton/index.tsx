import react from 'react';

import {RectButtonProps} from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Button,
  Title
} from './styles'

interface Props extends RectButtonProps{

  color?: string,
  title: string
  onPress: ()=> void;
  enabled?: boolean;
  loading?: boolean;

}

export function FormButton({color,enabled,loading, title,onPress, ...rest}: Props){
  const theme = useTheme()
 return(
 
    <Button {...rest}
    color={color}
    onPress={onPress}
    enabled={enabled}
    >
      {loading? 
    <Title>
    {title}
  </Title>:
  <ActivityIndicator 
  color={theme.colors.primary}
  />  
    }
      
    </Button>

)

}