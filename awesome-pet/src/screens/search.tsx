import React from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/search'
import AntDesign from 'react-native-vector-icons/AntDesign'

export function search(){
    return(
        <View style={styles.fundo}>
            <View style={styles.pesquisa}>
                <TextInput 
                    placeholder='Procurar...'
                    style={styles.input}
                    placeholderTextColor='gray'
                    
                />
                <AntDesign 
                    name='search1'
                    size={35}
                    color='#fff'
                    style={styles.lupa}
                    onPress={()=>Alert.alert('pesquisou')}
                />
            </View>
            
            <TouchableOpacity style={styles.resultado} onPress={() => Alert.alert('teste')}>
                <Text style={styles.informacao}>Nome: PetShow</Text>
                <Text style={styles.informacao}>Endereço: Avenida Francisco Moratto, 555</Text>
            </TouchableOpacity>
        </View>
    )
}