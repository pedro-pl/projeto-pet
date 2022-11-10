import React from 'react'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    pesquisa:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        
    },
    input:{
        backgroundColor: '#fff',
        padding: 10,
        color: '#264653',
        width: '87%',
        borderRadius: 5,
        marginTop: 20,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    lupa:{
        marginTop: 20,
        marginRight: 5,
    },
    fundo:{
        flex: 1,
        backgroundColor: "#baf2bb",
        display: 'flex',
        alignItems: 'center',
    },
    resultado:{
        backgroundColor: '#fff',
        width: '95%',
        borderRadius: 5,
        height:85,
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