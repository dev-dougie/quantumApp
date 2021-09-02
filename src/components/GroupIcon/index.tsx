import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

type Props = {
    uri: string
}

export function GroupIcon({uri} : Props) {
    return (
        <View style={styles.container}>
            <Image source={{ uri }} style={styles.image} resizeMode="cover" />
        </View>
    )
}