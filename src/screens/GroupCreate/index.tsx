import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native'
import uuid from 'react-native-uuid'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'

import { Header } from '../../components/Header';

import { styles } from './styles'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { NormalInput } from '../../components/NormalInput'
import axios from 'axios';

export function GroupCreate() {

    const [category, setCategory] = useState('')
    const [groupName, setGroupName] = useState('')
    const [patrimonyValue, setPatrimonyValue] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    const groupObject = {
        group: {
            name: groupName,
            icon,
            owner: true
        },
        category,
        description
    }

    function handleCategorySelect(categoryId: number) {
        setCategory(categoryId)
    }

    const addGroup = async() => await axios.post(`https://quantumfiap.herokuapp.com/groups`, groupObject).then(() => Alert.alert('Grupo cadastrado com sucesso!')).catch(err => console.log('Erro:', err))


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Background>
                <ScrollView>
                    <Header title="Criar Grupo" />

                    <Text style={[styles.label, {
                        marginLeft: 24,
                        marginTop: 10,
                        marginBottom: 10
                    }]}>Tipo de patrimônio</Text>
                    <CategorySelect
                        hasCheckbox
                        setCategory={handleCategorySelect}
                        categorySelected={category} />

                    <View style={styles.form}>
                        <View style={styles.field}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.label}>Nome do Grupo</Text>
                                <NormalInput onChangeText={setGroupName} />
                            </View>
                        </View>

                        <View style={styles.field}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.label}>Valor do patrimônio (R$)</Text>
                                <NormalInput onChangeText={setPatrimonyValue} />
                            </View>
                        </View>

                        <View style={styles.field}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.label}>Ícone (Ex.: http://icon.png)</Text>
                                <NormalInput onChangeText={setIcon} autoCorrect={false} />
                            </View>
                        </View>


                        <View style={[styles.field, { marginBottom: 6 }]}>
                            <Text style={styles.label}>Descrição</Text>

                            <Text style={styles.charsLimit}>Max 100 caracteres</Text>
                        </View>

                        <TextArea multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription} />

                        <View style={styles.footer}>
                            <Button onPress={addGroup} title="Criar grupo" />
                        </View>
                    </View>
                </ScrollView>
            </Background>
        </KeyboardAvoidingView>
    )
}
