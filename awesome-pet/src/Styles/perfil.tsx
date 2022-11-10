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
        width: '97%',
        height: 95,
        marginTop: 5,
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
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 20,
    },
    dados:{
        color: '#264653',
        fontSize: 25,
        fontWeight: 'bold',
    },
    subDado:{
        color: '#264653',
        fontSize: 12,
        fontWeight: 'bold',
    },
    canva:{
        backgroundColor: '#fff',
        width: '97%',
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    menu:{
        marginTop: 10,
        width: '100%',
        paddingLeft: 17,
        display: 'flex',
        justifyContent: 'space-around',
        height: 230,
    },
    opcoes:{
        color: '#264653',
        fontSize: 20,
    },
    footer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        width: '55%',
    },
    contatos:{
        color: '#264653',
        fontSize: 11,
    }
})