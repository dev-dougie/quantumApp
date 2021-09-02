import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { theme } from '../global/styles/theme'
import { GroupCreate } from '../screens/GroupCreate'
import { GroupDetails } from '../screens/GroupDetails'

const { Navigator, Screen } = createStackNavigator()

//Gerenciamento das rotas de navegação do aplicativo -  Definição de estruturas
export function AuthRoutes() {

    const { secondary100 } = theme.colors;

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: `${secondary100 || "transparent"}` }
            }}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
            <Screen name="GroupCreate" component={GroupCreate} />
            <Screen name="GroupDetails" component={GroupDetails} />
        </Navigator>
    )
}