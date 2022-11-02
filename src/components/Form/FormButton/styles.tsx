import styled from 'styled-components/native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps{
    color: string;
}



export const Button = styled(RectButton)<ButtonProps>`
    width: ${RFValue(311)}px;
    height: ${RFValue(56)}px;

    background-color: ${({theme, color}) => color? color : theme.colors.button};

    justify-content: center;
    align-items: center;


`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.font.medium};
    text-transform: uppercase;
    
`;

