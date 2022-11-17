import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   
   
    width: 100%;
   
    margin-top: 10px;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
`;

export const Header = styled.View`
    margin: 10px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const WrapperUser = styled.View`
    flex-direction: row;
    align-items: center;
`;


export const UserName = styled.Text`
    margin-left: 10px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.font.medium};
`;
export const CommentContent = styled.View`
   padding: 10px;
`;
export const ImagePost = styled.Image`
    width: 100%;
    height: 280px;
`;
export const ImageUser = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 30px;

    
`;
export const TextComment = styled.Text`
    margin-top: 10px;
`;
export const Footer = styled.View`
   padding: 10px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;


export const Title = styled.Text`
   margin-left: 10px;
   font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.font.regular};
`;

export const Data = styled.Text`
   font-size: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.font.regular};
`;
