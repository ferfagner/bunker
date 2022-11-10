import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   margin-bottom: ${RFValue(15)}px;;
`;

export const Error = styled.Text` 

   color: ${({ theme }) => theme.colors.button};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${RFValue(14)}px;

`;