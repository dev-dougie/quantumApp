import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../Member/styles'

export type IncidentProps = {
    id: number;
    groupId: number;
    day: string;
    month: string;
    value: string;
    description: string,
}

type Props = {
    data: IncidentProps
}

export default function IncidentItem({ data }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Valor total: R$ {data.value}
                </Text>

                <View style={styles.status}>
                    <Text style={styles.nameStatus}>
                        Data: {data.day}/{data.month}
                    </Text>
                </View>
                <View>
                <Text style={styles.nameStatus}>
                      Descrição:  {data.description}
                    </Text>
                </View>
            </View>
        </View>
    )
}
