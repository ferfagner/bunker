import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.background_color};
`;

export const Header = styled.View`
   flex-direction: row;
    margin-top: ${getStatusBarHeight()+30}px;
    
`;

export const Icon = styled(AntDesign)` 
    color: ${({theme})=> theme.colors.otherText};
    font-size: ${RFValue(24)}px;
    margin-left: 10px;
`;

export const Title = styled.Text`
    margin-left : ${RFValue(70)}px;
    color: ${({theme})=> theme.colors.otherText};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.font.bold};
    padding-bottom: ${RFValue(35)}px;
`;


export const CreatComments = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
background-color: ${({theme}) => theme.colors.shape};
border-radius: 5px;

`;

export const ButtonSendPost = styled(TouchableOpacity)`
    background-color: ${({theme})=> theme.colors.secondary};
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const TitleButtonPost = styled.Text`
    color: ${({theme})=> theme.colors.text};
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.font.bold};
    padding-bottom: ${RFValue(35)}px;
`;
