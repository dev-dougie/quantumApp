import React from 'react'

import { NavigationContainer } from "@react-navigation/native"

import { AuthRoutes } from './auth.routes'
import { Background } from '../components/Background'

//Contexto de navegação
export function Routes() {
    return (
        <Background>
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </Background>
    )
}