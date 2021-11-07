import React, { useEffect, useState } from 'react'
import {
    View,
    ImageBackground,
    Text, FlatList,
    Share,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert
} from 'react-native'
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
import { ModalView } from '../../components/ModalView';
import { NormalInput } from '../../components/NormalInput';
import { TextArea } from '../../components/TextArea';
import { SmallInput } from '../../components/SmallInput';
import axios from 'axios';
import IncidentItem from '../../components/IncidentItem';

export type Member = {
    id: number,
    username: string,
    avatar_url: string,
    status: string
}

type Params = {
    groupSelected: GroupType
}

export type IncidentType = {
    id: number,
    groupId: number
    day: string,
    month: string,
    value: string,
    description: string,
}

export function GroupDetails() {

    const [members, setMembers] = useState<Member[]>([])
    const [loading, setLoading] = useState(true);
    const [openIncidentModal, setOpenIncidentesModal] = useState(false);
    const [openListIncidentModal, setOpenListIncidentesModal] = useState(false);
    const [incidentDescription, setDescription] = useState('');
    const [incidentValue, setIncidentValue] = useState('');
    const [incidentDay, setIncidentDay] = useState('');
    const [incidentMonth, setIncidentMonth] = useState('');
    const [incidentsOfTheGroup, setIncidentsOfTheGroup] = useState([]);

    const route = useRoute();
    const { groupSelected } = route.params as Params

    const incidentObject = {
        groupId: groupSelected.id,
        description: incidentDescription,
        value: incidentValue,
        month: incidentMonth,
        day: incidentDay
    }

    async function loadGroups() {
        const data = await api.get('/members')
        setMembers(data.data)
        setLoading(false)
    }

    async function getIncidents(){
        const data = await api.get("/incidents");
        const response = data.data;
        const filteredIncidents = response.filter((item, index) => item.groupId === groupSelected.id)
        console.log(filteredIncidents)
        setIncidentsOfTheGroup(filteredIncidents);
    }

    useEffect(() => {
        loadGroups();
        getIncidents();
    }, [])

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


    function handleOpenIncidentsForm() {
        setOpenIncidentesModal(true);
    }

    function handleCloseIncidentsForm() {
        setOpenIncidentesModal(false);
    }

    function handleCloseIncidentsList() {
        setOpenListIncidentesModal(false);
    }

    function handleOpenIncidentsList(){
        setOpenListIncidentesModal(true)
    }

    const addIncident = async () => {
        await api.post("/incidents", incidentObject).then(() => {
            Alert.alert('Incidente cadastrado com sucesso!');
            setOpenIncidentesModal(false);
            setTimeout(() => { setOpenListIncidentesModal(true)}, 2000)
        }).catch(err => console.log(err))
    }

    return (
        <>
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
                        <TouchableOpacity onPress={handleOpenIncidentsList}>
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

                                    <Text style={{marginTop: 20, color: '#fff', fontWeight: '800'}}>
                                        CLIQUE PARA CONSULTAR INCIDENTES
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
                            <Button title="Registrar incidente" onPress={handleOpenIncidentsForm} />
                        </View>

                    </>}

                  

            </Background>
            <ModalView closeModal={handleCloseIncidentsList} visible={openListIncidentModal}>
             {incidentsOfTheGroup.length ? <FlatList
                            data={incidentsOfTheGroup}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <IncidentItem data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={styles.member}
                            contentContainerStyle={{ paddingBottom: 69 }}
                        /> : <Text style={{color: "#fff", fontSize: 15, textAlign: 'center', marginTop: 200}}>Nenhum incidente cadastrado neste grupo. 😎</Text>
            }
            </ModalView>
            {/* MODAL REGISTRO DE INCIDENTES */}
            <ModalView closeModal={handleCloseIncidentsForm} visible={openIncidentModal}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <Background>
                        <ScrollView>
                            <Text style={[styles.label, {
                                marginLeft: 50,
                                marginTop: 10,
                                marginBottom: 10,
                                fontSize: 30,
                                fontWeight: '700'
                            }]}>Adicionar novo incidente</Text>

                            <View style={styles.form}>

                                <View>
                                    <Text style={[styles.label, { marginBottom: 2 }]}>Dia e mês</Text>

                                    <View style={styles.column}>
                                        <SmallInput maxLength={2} onChangeText={setIncidentDay} />
                                        <Text style={styles.divider}>/</Text>
                                        <SmallInput maxLength={2} onChangeText={setIncidentMonth} />
                                    </View>
                                </View>

                                <View style={styles.field}>
                                    <View style={{ width: '100%' }}>
                                        <Text style={styles.label}>Valor do incidente (R$)</Text>
                                        <NormalInput onChangeText={setIncidentValue} />
                                    </View>
                                </View>

                                <View style={[styles.field, { marginBottom: 6 }]}>
                                    <Text style={styles.label}>Descrição do incidente</Text>

                                    <Text style={styles.charsLimit}>Max 200 caracteres</Text>
                                </View>

                                <TextArea multiline
                                    maxLength={200}
                                    numberOfLines={6}
                                    autoCorrect={false}
                                    onChangeText={setDescription} />

                                <View style={styles.footerForm}>
                                    <Button onPress={addIncident} title="Adicionar" />
                                </View>
                            </View>
                        </ScrollView>
                    </Background>
                </KeyboardAvoidingView>

            </ModalView>
        </>

    )
}
