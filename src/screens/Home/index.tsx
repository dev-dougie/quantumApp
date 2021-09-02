import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile'
import { styles } from './styles'
import { ListHeader } from '../../components/ListHeader';

import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { Group } from '../../components/Group';
import ListDivider from '../../components/ListDivider';


export function Home() {

    const [category, setCategory] = useState('')
    const navigation = useNavigation();

    //aqui nós iremos buscar da API de grupos!
    const groups = [
        {
            id: '1',
            group: {
                id: '1',
                name: 'Pro Driverz',
                icon: 'https://i.pinimg.com/originals/3e/bf/df/3ebfdfc513102f134b1f20d4e51032d3.jpg',
                owner: true
            },
            category: '1',
            description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: '2',
            group: {
                id: '2',
                name: 'Recanto dos Pássaros',
                icon: 'https://fotos.vivadecora.com.br/decoracao-chacara-jardim-com-arbustos-floridos-rosas-e-decoracao-revistavd-196260-proportional-height_cover_medium.jpg',
                owner: false
            },
            category: '2',
            description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: '3',
            group: {
                id: '3',
                name: 'Magic Of Sea',
                icon: 'https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/mercado-barcos-de-luxo-sc-schaeffer_2.jpg?9QAQ__B7Ia31gHHSHphknBxmDqFsS95o',
                owner: false
            },
            category: '3',
            description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleGroupCreate() {
        navigation.navigate('GroupCreate')
    }

    function handleGroupDetails() {
        navigation.navigate('GroupDetails')
    }


    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleGroupCreate} />
                </View>

                <View>
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect} />
                </View>


                <ListHeader title='Grupos' subtitle={`Total ${groups.length}`} />

                <FlatList
                    data={groups}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Group data={item}
                            onPress={handleGroupDetails} />
                    )}
                    style={styles.matches}
                    contentContainerStyle={{ paddingBottom: 69 }}
                    showsVerticalScrollIndicator={false}

                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </Background>
    );
}