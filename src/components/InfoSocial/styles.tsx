import styled from 'styled-components/native'
import {MaterialIcons} from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 350px;
    background-color: ${({theme}) => theme.colors.shape};
    height: 140px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PostContent = styled.View`
    width: 116px;
    align-items: center;
`;

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(50)}px;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(12)}px;
    font-family: ${({theme})=> theme.font.small};
    text-align: center;
`;

export const IgrejaContet = styled.View`
    margin-left: -18px;
    align-items: center;
    width: 116px;
`;

export const Image = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 5px;
`;

export const DiscipuladoContent = styled.View`
    width: 116px;
    align-items: center;
`;

  