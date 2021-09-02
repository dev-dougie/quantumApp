
import React from 'react'
import { Image, Text, View } from 'react-native'
import IllustrationPng from '../../assets/Illustration.png'
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SignIn() {

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.applicationName}>
                Quantum
            </Text>
            <View style={styles.content}>

                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize seus {`\n`}
                    patrimônios.
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para gerenciamento {`\n`}
                    patrimonial com amigos ou familiares!
                </Text>

                <ButtonIcon title="Acessar aplicativo" onPress={handleSignIn} />

                <Text style={styles.developed}>
                    From CiTI
                </Text>
            </View>
        </View>
    )
}