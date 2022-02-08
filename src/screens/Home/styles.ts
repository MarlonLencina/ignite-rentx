import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import {
    FlatList
} from "react-native"
import { CarDTO } from "../../dtos/carItemDTO";
import Animated from "react-native-reanimated";
import { BorderlessButton, GestureHandlerRootView, RectButton } from "react-native-gesture-handler";


export const Container = styled(GestureHandlerRootView)`

    flex: 1;
    background: ${props => props.theme.colors.background_primary};

`



export const Header = styled.View`

    width: 100%;
    height: 113px;
    font-family: ${props => props.theme.fonts.secundary_500};
    background: ${props => props.theme.colors.header};

    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 32px 24px;

`

export const TotalCars = styled.Text`

color: ${props => props.theme.colors.text};
font-family: ${props => props.theme.fonts.primary_400};
font-size: ${RFValue(15)}px;

`
export const CarList = styled.FlatList.attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <CarDTO>() => FlatList<CarDTO>

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export const WrapperCarButton = styled(Animated.View)`

z-index: 2;
position: absolute;
right: 20px;
bottom: 20px;

`

export const CarButton = styled(ButtonAnimated)`

width: 60px;
height: 60px;
background-color: ${props => props.theme.colors.main};
align-items: center;
justify-content: center;
border-radius: 30px;

`
