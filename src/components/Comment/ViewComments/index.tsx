import react, {memo} from 'react';
import { commentsDTO } from '../../../dtos/commentsDTO';

import {
  Container,
  Header,
  WrapperUser,
  UserName,
  TextComment,
  CommentContent,
  Footer,
  Data,
  ImageUser
} from './styles'

interface CommentsProps{
  data: commentsDTO;
}

function ViewCommentsComponent({data}: CommentsProps){
 
  const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric"
  }).format(new Date(data.date));

 return(

 <Container>
 <Header>
        <WrapperUser>
        <ImageUser source={{uri: 'data:image/jpeg;base64,' + data.userPhoto}}/>
        <UserName>
            @{data.userName}
        </UserName>
        </WrapperUser>
 </Header>
    <CommentContent>
        <TextComment>
        {data.textComment}
        </TextComment>
    </CommentContent>
    <Footer>
        <Data>{dateFormatted}</Data>
    </Footer>
 </Container>
)

}

export const ViewComments = memo(ViewCommentsComponent, (prevProps, nextProps)=>{
  return Object.is(prevProps.data, nextProps.data)
})