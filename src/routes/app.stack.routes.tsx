import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CarDetails } from "../screens/CarDetails";
import { Confirmation } from "../screens/Confirmation";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { Schedule } from "../screens/Schedule";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/FirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SecondStep";
import { Splash } from "../screens/splash";

export const AppStackRoutes = () => {

    const {
        Navigator, Screen
    } = createNativeStackNavigator()

    return (
        <>
            <Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                {/* <Screen name="SignIn"  component={SignIn} />
                <Screen name="SignUpFirstStep"  component={SignUpFirstStep} />
                <Screen name="SignUpSecondStep"  component={SignUpSecondStep} /> */}

                <Screen name="Home" component={Home} />
                <Screen name="CarDetails" component={CarDetails} />
                <Screen name="Schedule" component={Schedule} />
                <Screen name="ScheduleDetails" component={ScheduleDetails} />
                <Screen name="Confirmation" component={Confirmation} />
                <Screen name="MyCars" component={MyCars} />
            </Navigator>
        </>
    )
}