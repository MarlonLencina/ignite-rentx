import React, { useState } from "react";
import { Container, InputText, BoxIcon, Line } from "./styles";
import { Feather } from '@expo/vector-icons'
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export const Input: React.FC<InputProps> = ({
    iconName,
    value,
    ...rest
}) => {

    const theme = useTheme()

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const handleFocus = () => {
        setIsFocused(state => !state)
        setIsFilled(!!value)
    }

    return (
        <Container isFocused={isFocused} >

                <BoxIcon>
                    <Feather name={iconName} color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail} size={24} />
                </BoxIcon>

                <InputText  onFocus={handleFocus} onBlur={handleFocus} {...rest} />

                {
                    isFocused && <Line/>
                }
        </Container>
    )
}