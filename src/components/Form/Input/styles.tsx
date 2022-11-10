import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.secondary};
    width: ${RFValue(311)}px;
    height: ${RFValue(56)}px;
    border-radius: 5px;
    margin-bottom: 16px;    
    font-family: ${({theme}) => theme.font.regular};
    font-size: 14px;
    

    
`;