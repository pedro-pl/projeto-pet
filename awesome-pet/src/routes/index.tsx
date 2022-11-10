import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from './tab.routes';
import { Formulario } from "./tab.routes";

export function Routes (){
    return (
    <NavigationContainer>
        <Formulario/>
    </NavigationContainer>
    )
}