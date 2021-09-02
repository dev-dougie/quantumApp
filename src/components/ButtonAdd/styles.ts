import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles =  StyleSheet.create({
    container:{
        height: 46,
        width: 46,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})