import React from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack'


import {Home} from '../screens/Home'
import {Login} from '../screens/Login'
import {Register} from '../screens/Register'
import {NewPost} from '../screens/NewPost'


const {Navigator, Screen} = createNativeStackNavigator()

export function StackRoutes(){
     return(

        <Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
        >
            <Screen
            name={'Login'}
            component={Login}
            />
            <Screen
            name={'Home'}
            component={Home}
            options={{
                gestureEnabled: false
             }}
            />
            <Screen
            name={'Register'}
            component={Register}
            />
            <Screen
            name={'NewPost'}
            component={NewPost}
            />

        </Navigator>

     )

}