import React, { createContext, useState, ReactNode, useContext } from 'react'
import { useEffect } from 'react';
import { api } from '../services/api';

// Contexto que será inicializado quando o usuário fizer login na aplicaçao
type User = {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string
}

type AuthContextData = {
    user: User;
    loading: boolean;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState({} as User)
    const [loading, setLoading] = useState(false)

    async function getUserInfo() {
        const data = await api.get('/user')
        setUser(data.data)
        setLoading(true)
    }

    useEffect(() => { getUserInfo() }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}