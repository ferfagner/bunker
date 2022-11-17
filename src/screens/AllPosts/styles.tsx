import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({theme})=> theme.colors.background_color};
    
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

export const ButtonBack = styled(TouchableOpacity)`


`;

export const ActiveWrapper = styled.View`
   flex: 1;
    justify-content: center;
    
`;


