import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fundo:{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#baf2bb"
    },
    resultado:{
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 5,
        height:95,
        marginTop: 30,
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
    }
})