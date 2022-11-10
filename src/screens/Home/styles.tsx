import { RFValue } from 'react-native-responsive-fontsize';
import styled,{css}from 'styled-components/native'
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper'
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


interface HeaderProps{

    imageHeader: string

}

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.background_color};
`;

export const Header = styled.View<HeaderProps>`
width: 100%;
height: ${RFValue(200)}px;


background-color: ${({theme}) => theme.colors.header};

`;

export const ContentUser = styled.View`
    margin-top: ${getStatusBarHeight() + 20}px;
    margin-left: 18px;
    flex-direction: row;
    justify-content: space-between;
    
`;


export const UserInfo = styled.View`
    align-items: center;
    flex-direction: row;
    
`;

export const User = styled.View`
    margin-left: 12px;
`;


export const Image = styled.Image`
    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;
    border-radius: 5px;
`;


export const UserGraeting = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.font.regular};
    color: ${({theme}) => theme.colors.secondary};

`;

export const UserName = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.font.bold};
    color: ${({theme}) => theme.colors.secondary};
`;

export const ButtonConfigWrapper = styled.View`
    justify-content: center;
    padding-right: 20px;
`;

export const InfoSocialContent = styled.View`
    flex-direction: row;
    position: absolute;
    width: 100%;
    margin-top: ${getStatusBarHeight() + 120}px ;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
`;

export const PostsList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: getBottomSpace() }

})`
    margin-top: ${RFValue(20)}px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const TextPost = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.font.bold};
    color: ${({theme}) => theme.colors.secondary};
    
    
`;

export const FooteButton = styled.View`
    position: absolute;
    bottom: 22px;
    right: 22px;
`;


export const ActiveWrapper = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ButtonTop = styled(RectButton)`
   
`;

export const TitleWrapper = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-top: ${RFValue(80)}px;
   margin-left: 10px;
   margin-right: 10px;
`;



