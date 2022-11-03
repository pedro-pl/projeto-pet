import React from 'react';
import { View,
     Text, 
     TouchableOpacity, 
     SafeAreaView, 
     Image, 
     Alert} from 'react-native';
import { styles } from '../Styles/perfil';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export function perfil(){
    const navigation = useNavigation();
    function openSetting(){
        navigation.navigate('home')
    }
    return(
        <SafeAreaView style={styles.fundo}>
            <TouchableOpacity style={styles.informacoes}>
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/minha-imagem.jpg')}
                        style={styles.imgPerfil}
                    />
                </TouchableOpacity>
                <View style={styles.resumo}>
                    <Text style={styles.dados}>Nome: Pedro Lucas</Text>
                    <Text style={styles.dados}>Telefone: 11 94725-4880</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.menu}>
                <Text style={styles.opcoes} onPress={() => openSetting()}>Configurações <AntDesign name='setting' size={20}/></Text>
                <Text style={styles.opcoes}>Editar informações públicas <AntDesign name='edit' size={20}/></Text>
                <Text style={styles.opcoes}>Favoritos <AntDesign name='hearto' size={20}/></Text>
                <Text style={styles.opcoes}>Sair <AntDesign name='logout' size={20}/></Text>
            </View>
        </SafeAreaView>
    )
}