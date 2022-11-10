import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`

    
   
    background-color: ${({theme}) => theme.colors.primary};

    justify-content: flex-end;
    align-items: center;
    padding-top: ${getStatusBarHeight()+100}px;


`;

export const FormWrapper = styled.View`

`;

export const LogoWrapper = styled.View`
    padding-bottom: 66px;
  
`;

export const ButtonWrapper = styled.View`

    padding-bottom: 66px;

`;

export const NotAccoutWrapper = styled(RectButton)`

    padding-bottom: ${getBottomSpace() + 50}px;

`;

export const NotAccoutText = styled.Text`

    color: ${({theme}) => theme.colors.otherText};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.font.regular};
    

`;

export const Strong = styled.Text`

    color: ${({theme}) => theme.colors.otherText};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.font.bold};
    

`;
