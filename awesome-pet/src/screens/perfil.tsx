import React from 'react';
import { View,
     Text, 
     TouchableOpacity, 
     SafeAreaView, 
     Linking,
     Image, 
     Alert} from 'react-native';
import { styles } from '../Styles/perfil';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export function perfil(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.fundo}>
            <View style={styles.informacoes}>
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/minha-imagem.jpg')}
                        style={styles.imgPerfil}
                    />
                </TouchableOpacity>
                <View style={styles.resumo}>
                    <Text style={styles.dados}>Pedro Lucas</Text>
                    <Text style={styles.subDado}>s.pedro.s</Text>
                </View>
            </View>

            <View style={styles.canva}>
                <View style={styles.menu}>
                    <Text style={styles.opcoes} onPress={() => navigation.navigate('settings')}>Configurações <AntDesign name='setting' size={20}/></Text>
                    <Text style={styles.opcoes} onPress={() => navigation.navigate('editarInfo')}>Editar informações públicas <AntDesign name='edit' size={20}/></Text>
                    <Text style={styles.opcoes} onPress={() => navigation.navigate('favoritos')}>Favoritos <AntDesign name='hearto' size={20}/></Text>
                    <Text style={styles.opcoes} onPress={() => Alert.alert('Saiu!')}>Sair <AntDesign name='logout' size={20}/></Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.contatos}><AntDesign name='copyright' size={10}/> 2022 GetPet</Text>
                    <Text style={styles.contatos} onPress={()=> {Linking.openURL('https://github.com/pedro-pl')}}><AntDesign name='github' size={10}/> pedro-pl</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}