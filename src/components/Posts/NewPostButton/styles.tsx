import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: ${({theme})=> theme.colors.button};
`;