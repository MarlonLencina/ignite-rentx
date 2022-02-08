import React, { useState } from "react";
import { Feather } from '@expo/vector-icons'
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";
import { Container, InputText, BoxIcon, IconContainer, Line } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";


interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export const InputPassword: React.FC<InputProps> = ({
    iconName,
    value,
    ...rest
}) => {

    const theme = useTheme()

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const handlePasswordVisible = () => {
        setIsPasswordVisible(state => !state)
    }

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

                <InputText onFocus={handleFocus} onBlur={handleFocus} secureTextEntry={!isPasswordVisible} {...rest} />

                <BorderlessButton onPress={handlePasswordVisible}>
                    <IconContainer>
                        <Feather name={!isPasswordVisible ? 'eye' : 'eye-off'} color={theme.colors.text_detail} size={24} />
                    </IconContainer>
                </BorderlessButton>

                {
                    isFocused && <Line/>
                }

        </Container>
    )
}