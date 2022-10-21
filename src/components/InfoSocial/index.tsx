import react from 'react';

import {
  Container,
  PostContent,
  Icon,
  Title,
  IgrejaContet,
  Image,
  DiscipuladoContent
} from './styles'

export function InfoSocial(){

 return(

 <Container>
    <PostContent>
        <Icon name="post-add"/>
        <Title>
            Posts {'\n'}
            999
        </Title>
    </PostContent>
    <IgrejaContet>
        <Image source={{uri: 'https://secure.gravatar.com/avatar/e06bc1146fefc540f2a73dbb30fb5873'}}/>
        <Title>
            Comunidade das Nações
        </Title>
    </IgrejaContet>
    <DiscipuladoContent>
        <Image source={{uri: 'https://avatars.githubusercontent.com/u/5932294'}}/>
        <Title>
            Discipulador
            @FerFagner
        </Title>
    </DiscipuladoContent>

 </Container>
)

}