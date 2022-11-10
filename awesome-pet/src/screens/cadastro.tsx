import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ScrollView, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { styles } from "../Styles/cadastro";
import { useNavigation } from '@react-navigation/native';
import { TabRoutes } from "../routes/tab.routes";
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FormData = {
    nome: string;
    email: string;
    telefone: string;
    senha: string;
    repSenha: string;

}

export function cadastro(){
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [repSenha, setRepSenha] = useState("");
    const [value, setValue] = useState("");

    const armazenar = async () => {
        const newData = {
            nome,
            email,
            telefone,
            senha
        }

        try{
            const response = await AsyncStorage.getItem("@User")
            const previousData = response ? JSON.parse(response) : [];

            const data = [...previousData, newData];

            console.log(data)

            await AsyncStorage.setItem("@User", JSON.stringify(data));
            
            console.log(response)
        }catch{
            Alert.alert("erro")
        }

        /* AsyncStorage.setItem(newData) */
    }

    async function limpar(){
        const response = await AsyncStorage.getItem("@User")
        try{
            AsyncStorage.removeItem("@User")
            console.log("certo")
            console.log(response)
        }catch{
            console.log("Errado")
        }
    }

    function mostrar(){
        Alert.alert(nome);
    }

    /* const buscar = async (chave: string)=>{
        const valor = await AsyncStorage.getItem(chave)
        if(valor != null){
            setValue(valor)
        }
    } */
    
    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.quadro}>
                <Image
                    source={require('../../assets/GetPet.png')}
                    style={styles.imgLogo}
                />
            </View>
            <View style={styles.card}>
                <Controller
                    control={control}
                    name='nome'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Nome" 
                        placeholderTextColor='gray' 
                        value={nome} 
                        onChangeText={(value) => setNome(value)} 
                        autoCapitalize= 'none'
                        style={styles.input}/>
                    )}
                />

                <Controller
                    control={control}
                    name='email'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Email" 
                        placeholderTextColor='gray' 
                        value={email}
                        onChangeText={value => setEmail(value)} 
                        autoCapitalize= 'none'
                        style={styles.input}/>
                    )}
                />

                <Controller
                    control={control}
                    name='telefone'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Telefone" 
                        placeholderTextColor='gray' 
                        value={telefone} 
                        onChangeText={value => setTelefone(value)}
                        keyboardType= 'numeric'
                        style={styles.input}/>
                    )}
                />

                <Controller
                    control={control}
                    name='senha'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Senha" 
                        placeholderTextColor='gray' 
                        value={senha} 
                        onChangeText={value => setSenha(value)} 
                        autoCapitalize= 'none'
                        style={styles.input}/>
                    )}
                />

                <Controller
                    control={control}
                    name='repSenha'
                    render={({ field: {value, onChange}}) => (
                        <TextInput 
                        placeholder="Repetir senha" 
                        placeholderTextColor='gray' 
                        value={repSenha} 
                        onChangeText={value => setRepSenha(value)} 
                        autoCapitalize= 'none'
                        style={styles.input}/>
                    )}
                />

                <CustomButton
                    title={'Cadastrar'}
                    onClick={armazenar} 
                    style={undefined} 
                    titleStyle={undefined}                
                />
            </View>
        </ScrollView>
    )
}