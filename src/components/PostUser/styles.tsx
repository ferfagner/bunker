import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 300px;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
`;