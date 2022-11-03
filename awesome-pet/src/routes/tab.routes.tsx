import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { home } from "../screens/home";
import { perfil } from '../screens/perfil';
import { search } from '../screens/search';
import { settings } from '../screens/settings'
const Tab = createBottomTabNavigator();


export function TabRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#80ed99',
                tabBarInactiveTintColor: 'gray',
            }}
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
                component={perfil}
            />
        </Tab.Navigator>
    )
}