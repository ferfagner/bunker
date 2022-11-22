import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect
} from "react";
import { api } from "../services/api";

interface UserProps {

    id: string;
    email: string;
    name: string;
    username: string;
    avatar: string;
    token: string;

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

    const [data, settData] = useState<UserProps>({} as UserProps)

    async function signIn({email, password}: SingInCredential) {
        
        try {
            const response = await api.post('/sessions',{
                email,
                password
            })

            const {token, user} = response.data

            api.defaults.headers.common['Authorization']= `Barrer ${token}`

            settData(user)


        } catch (error) {
            throw new Error(error)
        }

        
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