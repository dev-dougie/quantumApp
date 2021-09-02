import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary100
    },
    image:{
        width: '100%',
        height: 320
    },
    applicationName:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 60,
        marginBottom: 16,
        lineHeight: 60,
        fontWeight: 'bold',
        fontFamily: theme.fonts.appName
    },
    content:{
        marginTop: 0,
        paddingHorizontal: 20
    },
    title:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
        lineHeight: 30,
        fontFamily: theme.fonts.title700
    },
    subtitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        lineHeight: 25,
        fontFamily: theme.fonts.title500
    },
    developed:{
        color: '#fff',
        marginTop: 100,
        textAlign: 'center'
    }
})