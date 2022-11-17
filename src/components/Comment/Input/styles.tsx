import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.secondary};
    width: ${RFValue(290)}px;
    height: ${RFValue(50)}px;
    border-radius: 5px;   
    font-family: ${({theme}) => theme.font.regular};
    font-size: 14px;
    margin-left: 10px;
`;