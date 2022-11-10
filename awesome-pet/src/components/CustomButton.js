import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CustomButton({title, onClick, style, titleStyle}){
    return(
    <TouchableOpacity 
        style={style ? style : styles.button} 
        onPress={onClick}>
        <Text style={titleStyle ? titleStyle : styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#03045e',
        width: '95%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 25,
    },
    buttonTitle:{
        fontSize: 16,
        color: '#fff',
    }
})