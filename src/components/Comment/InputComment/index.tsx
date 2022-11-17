import react from 'react';
import { TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { Input } from '../Input';
import { useTheme } from 'styled-components';


import {
  Container,
  Error
} from './styles'

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}

export function InputComment({
  control,
  name,
  error,
  ...rest
}: Props): JSX.Element {
  const theme = useTheme()
  return (
    <Container>
        {error && <Error>{error}</Error>}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} placeholderTextColor={theme.colors.placeHolder} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
    
    </Container>
  );
}

