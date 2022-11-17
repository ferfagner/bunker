import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: ${({theme})=> theme.colors.button};
`;