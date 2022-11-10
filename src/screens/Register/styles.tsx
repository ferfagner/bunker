import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    background-color: ${({theme})=> theme.colors.background_color};
    padding-bottom: ${getBottomSpace() + 30}px;
    

`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.otherText};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.font.bold};
    padding-bottom: ${RFValue(20)}px;
`;


export const Label = styled.Text`
     color: ${({theme}) => theme.colors.otherText};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.font.regular};
`;

export const FormWrapper = styled.View`
    padding-bottom: ${RFValue(15)}px;;
`;
export const ButtonWrapper = styled.View`
    padding-bottom: ${RFValue(20)}px;
`;

