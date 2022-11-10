import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/home';

export function favoritos(){
    return(
        <SafeAreaView style={styles.fundo}>
            <TouchableOpacity style={styles.resultado} onPress={() => Alert.alert('teste')}>
                <Text style={styles.informacao}>Nome: PetShow</Text>
                <Text style={styles.informacao}>Endereço: Avenida Francisco Moratto, 555</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}