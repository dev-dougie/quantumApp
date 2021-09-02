import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar";
import { ButtonAdd } from "../ButtonAdd";
import { styles } from "./styles";

export function Profile() {
    const avatarDemo = 'https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg'

    return (
        <View style={styles.container}>
              <Avatar urlImage={avatarDemo}/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>Fulano</Text>

                    
                </View>

                <Text style={styles.message}>Bem-vindo novamente!</Text>
            </View>
        </View>
    )
}