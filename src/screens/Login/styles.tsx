import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`

    flex: 1;
   
    background-color: ${({theme}) => theme.colors.primary};

    justify-content: flex-end;
    align-items: center;


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

    padding-bottom: ${getBottomSpace() + 80}px;

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
