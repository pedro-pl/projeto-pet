import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    fundo:{
        width: '100%',
        display: 'flex',
        flex: 1,
        backgroundColor: "#baf2bb"
    },
    quadro:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },
    imgLogo:{
        marginTop: 20,
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
    labelLink:{
        color: '#121212',
        fontSize: 16,
        marginTop: 20,
    },
    link:{
        color: '#00b4d8'
    }
})