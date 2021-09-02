import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native'
//Obtem a altura levando em consideração o notch dos modelos de iPhone x >
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() +26,
        marginBottom: 42
    },
    matches:{
        marginTop: 24,
        marginLeft: 24
    }
})