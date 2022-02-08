import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from "react";
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from "../screens/MyCars";
import { AppStackRoutes } from './app.stack.routes';

export const AppTabRoutes = () => {

    const {
        Navigator, Screen
    } = createBottomTabNavigator()

    return (
        <>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen name="Home" component={AppStackRoutes} />
                <Screen name="MyCars" component={MyCars} />
                <Screen name="Profile" component={Confirmation} />
            </Navigator>
        </>
    )
}