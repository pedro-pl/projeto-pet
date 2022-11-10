import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fundo:{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#baf2bb"
    },
    scroll:{
        width: '100%',
        display: 'flex',
    },
    resultado:{
        alignSelf: 'center',
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 5,
        height:85,
        marginTop: 15,
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    informacao:{
        color: '#264653',
        fontSize: 16,
    },
    label:{
        backgroundColor: '#fff',
        width: '100%',
        height:55,
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    texto:{
        color: '#264653',
        fontSize: 23,
    }
})