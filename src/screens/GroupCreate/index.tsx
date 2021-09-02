import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { Feather } from '@expo/vector-icons'

import { Header } from '../../components/Header';
import { GroupIcon } from '../../components/GroupIcon'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { GroupType } from '../../components/Group'
import { NormalInput } from '../../components/NormalInput'



export function GroupCreate() {

    const [category, setCategory] = useState('')
    const [guild, setGuild] = useState<GroupType>({} as GroupType)

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId)
    }


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
                                <NormalInput />
                            </View>
                        </View>

                        <View style={styles.field}>
                            <View style={{ width: '100%' }}>
                                <Text style={styles.label}>Valor do patrimônio (R$)</Text>
                                <NormalInput />
                            </View>
                        </View>

        
                        <View style={[styles.field, { marginBottom: 6 }]}>
                            <Text style={styles.label}>Descrição</Text>

                            <Text style={styles.charsLimit}>Max 100 caracteres</Text>
                        </View>

                        <TextArea multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false} />

                        <View style={styles.footer}>
                            <Button title="Criar grupo" />
                        </View>
                    </View>
                </ScrollView>
            </Background>
        </KeyboardAvoidingView>
    )
}
