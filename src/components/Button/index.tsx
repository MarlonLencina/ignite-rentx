import React from "react";
import { ActivityIndicator, View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Load } from "../Load";
import { Container, Title } from "./styles";

interface Props extends RectButtonProps{
    title: string;
    color?: string;
    isEnabled?: boolean;
    isLoading?: boolean;
    light?: boolean;
}

export const Button: React.FC<Props> = ({light, isLoading = false, isEnabled = true, color, title, ...rest}) => {

    const theme = useTheme()

    return (
        <Container 
        enabled={isEnabled} 
        {...rest} 
        color={color ? color : theme.colors.main}
        style={{
            opacity: (isEnabled === false || isLoading === true) ? 0.5 : 1,
        }}
        >

            {
                isLoading ? <ActivityIndicator color={theme.colors.text} /> : (
                    <Title light={light}>
                        {title}
                    </Title>

                )
            }
        </Container>
    )
}