import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    
    
    background-color: ${({theme}) => theme.colors.secondary};
    width: ${RFValue(311)}px;
    height: ${RFValue(200)}px;
    border-radius: 5px;
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(30)}px;
    
    font-family: ${({theme}) => theme.font.regular};
    font-size: 14px;

    
`;