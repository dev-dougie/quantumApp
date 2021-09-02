import React from 'react'
import { View, ImageBackground, Text, FlatList, Share, TouchableOpacity } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background'
import { Header } from '../../components/Header';
import { styles } from './styles';
import { Fontisto, Entypo  } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Button } from '../../components/Button';


export function GroupDetails() {

    //Api de membros
    const members = [
        {
            id: '1',
            username: 'Douglas Santos',
            avatar_url: 'https://github.com/dev-dougie.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Eduardo Belisia',
            avatar_url: 'https://github.com/ebelisia.png',
            status: 'online'
        },
        {
            id: '3',
            username: 'Fulano de Tal',
            avatar_url: 'https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg',
            status: 'online'
        },
        {
            id: '4',
            username: 'Henrique Muniz',
            avatar_url: 'https://media-exp1.licdn.com/dms/image/C4D03AQEAWLSSKOM9xA/profile-displayphoto-shrink_200_200/0/1593538860024?e=1635984000&v=beta&t=-2peDip2r2scr67A_QHt2POSx5EkZioNqeTziws6fVU',
            status: 'online'
        },
        {
            id: '5',
            username: 'Leo Batini',
            avatar_url: 'https://github.com/batinera.png',
            status: 'online'
        },
        {
            id: '6',
            username: 'Susana Nakasato',
            avatar_url: 'https://github.com/susanakasato.png',
            status: 'online'
        },
    ]

    async function ShareExample() {
        try {
            const result = await Share.share({
                message: `Junte-se ao grupo no Quantum! 😁
                                Link para acessar: quantum.app.join`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton onPress={ShareExample}>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary} />
                    </BorderlessButton>} />
            <TouchableOpacity>
                <ImageBackground
                    source={BannerImg}
                    style={styles.banner}>

                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>
                            Pro Driverz
                        </Text>

                        <Text style={styles.subtitle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Text>
                    </View>


                </ImageBackground>
            </TouchableOpacity>
            <ListHeader title="Membros" subtitle={`Total ${members.length}`} />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.member}
                contentContainerStyle={{ paddingBottom: 69 }}
            />

            <View style={styles.footer}>
                <Entypo name="flag" size={24} color="black" />
                <Button title="Registrar incidente" />
            </View>

        </Background>
    )
}
