import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
} from "react";

import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';

interface UserProps {

    id: string;
    email: string;
    name: string;
    username: string;
    

}

interface SingInCredential{
    email: string;
    password: string;
}

interface authContexData{
    user: UserProps;
    signIn: (credential: SingInCredential) => Promise<void>
   // signOut: ()=> Promise<void>
    //updateUser:(user: UserProps)=> Promise<void>

}

interface authProviderProrps{
    children: ReactNode
}


const AuthContex = createContext<authContexData>({} as authContexData)


function AuthProvider({children}: authProviderProrps){
    

    const [data, setData] = useState<UserProps>({} as UserProps)

    async function signIn({email, password}: SingInCredential) {
        
    auth().signInWithEmailAndPassword(email, password)
    .then(async ({user})=> {

        const allinfoUser = 
        await firestore()
        .collection('users')
        .doc(user.uid)
        .get();

        const infoUser = allinfoUser.data()

        

        setData({
            id: user.uid,
            email: user.email,
            name: infoUser.name,
            username: infoUser.userName
        })
    })

        
    }

    return (
        <AuthContex.Provider value={{
            user: data,
            signIn
        }}>
            {children}
        </AuthContex.Provider>
    )

}

function useAuth(): authContexData{
    const contex = useContext(AuthContex)

    return contex;
}


export{AuthProvider, useAuth}