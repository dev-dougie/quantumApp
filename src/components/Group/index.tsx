import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { GroupIcon } from '../GroupIcon'
import { styles } from './styles'
import UserSvg from '../../assets/user.svg'
import { theme } from '../../global/styles/theme'
import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'react-native-svg'
import { categories } from '../../utils/categories'

export type GroupType = {
    id: string
    name: string,
    icon: string,
    owner: boolean
}

export type GroupList = {
    id: string,
    group: GroupType,
    category: string,
    description: string
}

type Props = {
    data: GroupList
}

export function Group({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id == data.category)
    const { owner } = data.group;
    const { member, on, secondary50, secondary70 } = theme.colors;


    return (
        <RectButton {...rest}>
            <View style={styles.container}>

                    <GroupIcon uri={data.group.icon}/>
          

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.group.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>

                        <View style={styles.userInfo}>
                            <UserSvg fill={owner ? on : member} />

                            <Text style={[
                                styles.player,
                                { color: owner ? on : member }
                            ]}>
                                {owner ? 'Admin' : 'Membro'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}