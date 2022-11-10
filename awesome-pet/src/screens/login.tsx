import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ScrollView, View, TextInput, Button, Image, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "../Styles/login";
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function login(){
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function entrar(){
        const response = await AsyncStorage.getItem("@User")
        let dado;
        if(response){
            dado = JSON.parse(response)
        }

        let userEmail = email;
        let userSenha = senha;

        console.log(dado[0].email)

        console.log(userEmail, userSenha)
    }

    return(
        <ScrollView style={styles.fundo}>
             <View style={styles.quadro}>
                <Image
                    source={require('../../assets/GetPet.png')}
                    style={styles.imgLogo}
                />
            </View>
            
            <View style={styles.card}>
                <Controller
                    control={control}
                    name='email'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Email" 
                        placeholderTextColor={'gray'} 
                        value={email} 
                        onChangeText={value => setEmail(value)} 
                        style={styles.input} />
                    )}
                />

                <Controller
                    control={control}
                    name='senha'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Senha" 
                        placeholderTextColor={'gray'} 
                        value={senha}
                        secureTextEntry={true}
                        onChangeText={value => setSenha(value)} 
                        style={styles.input} />
                    )}
                />

                <CustomButton
                title={'Entrar'}
                onClick={entrar} 
                style={undefined} 
                titleStyle={undefined}     
                />

                <Text style={styles.labelLink}>Ainda não tem uma conta? crie uma < Text style={styles.link} onPress={() => navigation.navigate('cadastro')}>aqui.</Text></Text>
            </View>
        </ScrollView>
    )
}