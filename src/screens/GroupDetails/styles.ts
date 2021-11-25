import { StyleSheet } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 150,
        marginBottom: 18
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        lineHeight: 21
    },
    member: {
        marginLeft: 24,
        marginTop: 15
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 12
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },
    charsLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    footerForm: {
        marginTop: 20
    },
 
})
