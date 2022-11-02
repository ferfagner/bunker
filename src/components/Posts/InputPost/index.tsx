import react from 'react';
import { TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import { Input } from '../Input';


import {
  Container
} from './styles'

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputPost({
  control,
  name,
  ...rest
}: Props): JSX.Element {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
        name={name}
      />
    </Container>
  );
}

