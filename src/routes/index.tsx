import { NavigationContainer } from '@react-navigation/native';
import react from 'react';

import {StackRoutes} from './stack.routes'


export function Routes(){

 return(

 <NavigationContainer>
    <StackRoutes />

 </NavigationContainer>
)

}