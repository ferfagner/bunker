import react from 'react';

import { RectButtonProps} from 'react-native-gesture-handler'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Button,
  Title
} from './styles'

interface Props extends TouchableOpacityProps{

  color?: string;
  title: string;
  enabled?: boolean;
  loading?: boolean;
  onPress: () => void;

}

export function FormButton({color,enabled,loading, onPress, title, ...rest}: Props){
  const theme = useTheme()
 return(
 
    <Button {...rest}
    color={color}
    disabled={false}
    onPress={onPress}
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