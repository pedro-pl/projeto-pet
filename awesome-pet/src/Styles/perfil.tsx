import React from 'react'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    fundo:{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#baf2bb"
    },
    informacoes:{
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 5,
        height: 95,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    imgPerfil:{
        borderWidth: 2,
        borderColor: '#264653',
        width: 65,
        height: 65,
        borderRadius: 50,
    },
    resumo:{
        marginLeft: 20,
    },
    dados:{
        color: '#264653',
        fontSize: 16,
    },
    menu:{
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 5,
        height: '35%',
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
    opcoes:{
        color: '#264653',
        fontSize: 19,
    }
})