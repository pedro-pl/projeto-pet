import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { home } from "../screens/home";
import { perfil } from '../screens/perfil';
import { search } from '../screens/search';
import { settings } from '../screens/settings'
import { editarInfo } from '../screens/editarInfo';
import { favoritos } from '../screens/favoritos';
import { cadastro } from '../screens/cadastro';
import { login } from '../screens/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function Formulario(){
    return(
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen
                name="login"
                component={login}
                options={{
                }}
            />

            <Stack.Screen
                name="cadastro"
                component={cadastro}
                options={{
                }}
            />

            <Stack.Screen
                name="Home"
                component={TabRoutes}
            />
        </Stack.Navigator>


    )
}

export function Perfil(){
    return(
    <Stack.Navigator>
        <Stack.Screen 
            name="perfil" 
            component={perfil} 
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen 
            name="settings" 
            component={settings}
            options={{
                title: 'Configurações',
                headerTintColor: '#121212',
                headerStyle: {
                    backgroundColor: '#f8f9fa',
                },
            }}
        />

        <Stack.Screen 
            name="editarInfo" 
            component={editarInfo}
            options={{
                title: 'Editar informações',
            }}
        />

        <Stack.Screen 
            name="favoritos" 
            component={favoritos}
            options={{
                title: 'Favoritos',
            }}
        />
        </Stack.Navigator>
    )
}


export function TabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#80ed99',
                tabBarInactiveTintColor: 'gray',
            }}
            initialRouteName='home'
        >
            <Tab.Screen
                name='home'
                options={{
                    title: 'AwesomePet',
                    headerShown: false,
                    tabBarLabel: 'Início',
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="home" size={size} color={color}/>
                    )
                }}
                component={home}
            />

            <Tab.Screen
                name='Search'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Procurar',
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name='search1' size={size} color={color}/>
                    )
                }}
                component={search}
            />

            <Tab.Screen
                name='Perfil'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name='user' size={size} color={color}/>
                    )
                }}
                component={Perfil}
            />
        </Tab.Navigator>
    )
}