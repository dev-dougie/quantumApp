import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile'
import { styles } from './styles'
import { ListHeader } from '../../components/ListHeader';

import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/core';

import { Group, GroupType } from '../../components/Group';
import ListDivider from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';
import { RectButton } from 'react-native-gesture-handler';

export function Home() {

    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [groups, setGroups] = useState<GroupType[]>([]);


    const navigation = useNavigation();
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleGroupCreate() {
        navigation.navigate('GroupCreate')
    }

    function handleGroupDetails(groupSelected: GroupType) {
        navigation.navigate('GroupDetails', { groupSelected })
    }

    async function loadGroups() {
        const data = await api.get('/groups')
        setGroups(data.data)
        setLoading(false)

        //Realizando a filtragem dos grupos com base no clique do usuário
        category ? setGroups(groups.filter(item => item.category.toString() == category)) : setGroups(data.data)
    }

    useFocusEffect(useCallback(() => { loadGroups() }, [category]))

    function handleSignOut(){
        Alert.alert('Logout', 'Deseja sair do Quantum?', [
            {
                text: 'Não'
            },
            {
                text: 'Sim',
                onPress: () => { navigation.goBack()}
            }
        ])
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <RectButton onPress={handleSignOut}>
                        <Profile />
                    </RectButton>
                    <ButtonAdd onPress={handleGroupCreate} />
                </View>


                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect} />
                {
                    loading ? <Load /> :
                        <>
                            <ListHeader title='Grupos' subtitle={`Total ${groups.length}`} />

                            <FlatList
                                data={groups}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <Group data={item}
                                        onPress={() => handleGroupDetails(item)} />
                                )}
                                style={styles.matches}
                                contentContainerStyle={{ paddingBottom: 69 }}
                                showsVerticalScrollIndicator={false}
                                ItemSeparatorComponent={() => <ListDivider />}
                            />
                        </>
                }
            </View>
        </Background>
    );
}