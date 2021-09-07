import React, { useEffect, useState } from 'react'
import { View, ImageBackground, Text, FlatList, Share, TouchableOpacity } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background'
import { Header } from '../../components/Header';
import { styles } from './styles';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import { Button } from '../../components/Button';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { useRoute } from '@react-navigation/core';
import { GroupType } from '../../components/Group';

export type Member = {
    id: number,
    username: string,
    avatar_url: string,
    status: string
}

type Params = {
    groupSelected: GroupType
}

export function GroupDetails() {

    const [members, setMembers] = useState<Member[]>([])
    const [loading, setLoading] = useState(true);
    
    const route = useRoute();
    const { groupSelected } = route.params as Params

    async function loadGroups() {
        const data = await api.get('/members')
        setMembers(data.data)
        setLoading(false)
    }

    useEffect(() => { loadGroups() }, [])

    async function ShareExample() {
        try {
            const result = await Share.share({
                message: `Junte-se ao ${groupSelected.group.name} no Quantum! 😁
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
            {loading ? <Load /> :
                <>
                    <TouchableOpacity>
                        <ImageBackground
                            source={BannerImg}
                            style={styles.banner}>

                            <View style={styles.bannerContent}>
                                <Text style={styles.title}>
                                    {groupSelected.group.name}
                                </Text>

                                <Text style={styles.subtitle}>
                                    {groupSelected.description}
                                </Text>
                            </View>


                        </ImageBackground>
                    </TouchableOpacity>
                    <ListHeader title="Membros" subtitle={`Total ${members.length}`} />

                    <FlatList
                        data={members}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.member}
                        contentContainerStyle={{ paddingBottom: 69 }}
                    />

                    <View style={styles.footer}>
                        <Button title="Registrar incidente" />
                    </View>
                </>}


        </Background>
    )
}
