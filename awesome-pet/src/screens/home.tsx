import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/home';

export function home(){
    return(
        <SafeAreaView style={styles.fundo}>
            <View style={styles.label}>
                <Text style={styles.texto}>
                    Pet-shops disponíveis:
                </Text>
            </View>
            <ScrollView style={styles.scroll}>
            <TouchableOpacity style={styles.resultado} onPress={() => Alert.alert('teste')}>
                <Text style={styles.informacao}>Nome: PetShow</Text>
                <Text style={styles.informacao}>Endereço: Avenida Francisco Moratto, 555</Text>
            </TouchableOpacity>
            
            </ScrollView>
        </SafeAreaView>
    )
}