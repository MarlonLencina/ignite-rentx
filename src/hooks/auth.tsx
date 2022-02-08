import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";

interface authContextProps {
    user: Omit<userDataProps, 'password'>;
    signIn: (credentials: credentialsProps) => Promise<void>
}

interface userDataProps {
    id: string;
    email: string;
    name: string;
    password: string;
    driver_license: string;
    avatar: string;
}

interface authState {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
        driver_license: string;
        avatar: string;
    };
}

interface credentialsProps {
    email: string;
    password: string;
}

const AuthContext = createContext({} as authContextProps)

export const AuthContextProvider: React.FC = ({children}) => {

    const [data, setData] = useState({} as authState)

    const signIn = useCallback( async ({email, password}: credentialsProps) => {

        try {

            const response = await api.post('sessions', {email, password})

            const {user, token} = response.data
            
            setData({user, token})

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        } catch (error) {

            throw new Error(error)

        }

    },[])

    return (
        <AuthContext.Provider value={{
            user: data.user,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}