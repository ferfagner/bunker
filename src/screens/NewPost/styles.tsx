import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({theme})=> theme.colors.background_color};

    padding-bottom: ${getBottomSpace() + 30}px;
`;

export const UserWrapper = styled.View`
   padding-bottom: ${RFValue(170)}px;
`;

export const Title = styled.Text`
    color: ${({theme})=> theme.colors.otherText};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.font.bold};
    padding-bottom: ${RFValue(35)}px;
    
`;

export const HeaderUser = styled.View`
   flex-direction: row;
   align-items: center;
   
`;
export const InfoUserWrapper = styled.View`
   margin-left: 20px;
`;

export const ImageUser = styled.Image`
   height: ${RFValue(60)}px;
   width: ${RFValue(60)}px;
   border-radius: ${RFValue(30)}px;
`;

export const NameUser = styled.Text`
   color: ${({theme})=> theme.colors.otherText};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.font.medium};
   
`;
export const NameIgreja = styled.Text`
   color: ${({theme})=> theme.colors.otherText};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.font.small};
    text-transform: uppercase;
    
    
`;




