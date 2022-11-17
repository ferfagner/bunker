import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';
import {Entypo} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: ${RFValue(41)}px;
    height: ${RFValue(41)}px;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 5px;
`;


export const Icon = styled(Entypo)`
    font-size: ${RFValue(41)}px;
    color: ${({theme}) => theme.colors.button};
`;