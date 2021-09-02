import React from 'react';
//Esses elementos farão a apresnetação de botões seguindo o padrão de cada plataforma (ios ou Android)
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';
import LoginPng from '../../assets/login.png'
import { styles } from './styles'

type Props = RectButtonProps & { title: string; }

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={LoginPng} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}