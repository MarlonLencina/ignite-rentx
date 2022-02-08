import react from "react-native"

import {MaterialIcons} from "@expo/vector-icons"
import { Container } from "./styles"
import { useTheme } from "styled-components"

import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


interface Props extends BorderlessButtonProps {
    color?: string;
}

export const BackButton = ({color, ...rest}: Props) => {

    const theme = useTheme()

    return (
        <Container {...rest}>
            <MaterialIcons color={color ? color : theme.colors.text} name="chevron-left" size={24}/>
        </Container>
    )
}