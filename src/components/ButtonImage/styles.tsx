import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(RectButton)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Icon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.otherText};
    font-size: 35px;
    padding-right: 20px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.otherText};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.font.regular};
`;