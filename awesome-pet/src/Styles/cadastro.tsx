import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    quadro:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    imgLogo:{
        marginTop: 35,
        width: 170,
        height: 170,
        color: '#121212'
    },
    card:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 25,
    },
    scroll:{
        width: '100%',
        display: 'flex',
        flex: 1,
        backgroundColor: "#baf2bb"
    },
    input:{
        backgroundColor: '#fff',
        width: '95%',
        height: 50,
        borderRadius: 3,
        marginTop: 15,
        fontSize: 16,
        padding: 8,
        color: '#121212',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
})