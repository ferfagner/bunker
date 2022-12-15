import { NavigationContainer } from '@react-navigation/native';
import react from 'react';
import { useAuth } from '../hooks/auth';

import {StackRoutes} from './app.stack.routes'
import { AuthRoutes } from './auth.stack.routes';


export function Routes(){
   const {user} = useAuth()
 return(

 <NavigationContainer>
   {user.id ?  <StackRoutes />: <AuthRoutes/>}
   
 </NavigationContainer>
)

}