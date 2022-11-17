import react, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { PostAllUser } from '../../components/Posts/PostAllUser';
import { PostDTO } from '../../dtos/postDTO';
import { api } from '../../services/api';
import { ActivityIndicator} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, ParamListBase, NavigationProp, useRoute, useFocusEffect } from '@react-navigation/native';
import {
  Container,
  Title,
  Header,
  Icon,
  ButtonBack,
  ActiveWrapper
} from './styles'

export function AllPosts(){

    const [allposts, setAllposts] = useState<PostDTO[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const theme = useTheme()

    function handleBack(){
        navigation.goBack()
    }

    async function getAllPosts(){
      try {
    
          const response = await api.get(`posts?_page=1&_limit=6`)
    
          const data = response.data
    
          setAllposts(data)
          setIsLoading(true)
          
      
        } catch (error) {
          
          
        }
      }

    useEffect(()=>{
        getAllPosts()
    });

 return(

 <Container>
    <Header>
    <ButtonBack
    onPress={handleBack}
    >
    <Icon 
    name="leftcircleo"
    />
    </ButtonBack>
    <Title>Todas as Postagens!</Title>
    </Header>
    {isLoading 
    ? 
    <FlatList
    data={allposts}
    keyExtractor={item => item.id}
    renderItem={({item})=> 
    <PostAllUser 
    data={item}
    />
    }
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={16}
    initialNumToRender={6}
    updateCellsBatchingPeriod={6}
    />
    :
    <ActiveWrapper>
    <ActivityIndicator
    size="large"
    color={theme.colors.button}
    />
    </ActiveWrapper>
    }
   

 </Container>
)

}