import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { InputPassword } from "../../../components/passwordInput";
import { api } from "../../../services/api";
import { Bullets, Container, Header, Title, SubTitle, Form, FormTitle} from "./styles";

interface ParamsProps {
    params: {
        user: {
            name: string;
            mail: string;
            drivenLicense: string;
        }
    }
}

export const SignUpSecondStep = () => {

    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigation = useNavigation()
    const theme = useTheme()
    const {params: {user}} = useRoute() as ParamsProps


    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleRegister = async () => {

        if(password !== passwordConfirmation || !password || !passwordConfirmation)
            return Alert.alert('As senhas são diferentes.')
        
        const dataNewUser = {
            email: user.mail,
            name: user.name,
            driver_license: user.drivenLicense,
            password
        }

        try {

            console.log(dataNewUser)

            await api.post('users', dataNewUser)

            navigation.navigate('Confirmation' as never,  {
                data: {
                    message: `Agora é só fazer login${'\n'} na sua conta.`,
                    nextScreen: 'SignIn',
                    title: 'Conta criada'
                }
            } as never)

        } catch (error) {
            
            console.log(error)

        }

    }
 
    return (
        <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>
            <Header>
                <BackButton onPress={handleGoBack}/>
                <Bullets>
                    <Bullet isActive />
                    <Bullet />
                </Bullets>
            </Header>
            <Title>
                Crie sua{'\n'}
                conta
            </Title>
            <SubTitle>
                Faça seu cadastro de{'\n'}
                forma rápida e fácil.
            </SubTitle>

            <Form>

            <FormTitle>
                1. Senha
            </FormTitle>

            <InputPassword value={password} onChangeText={setPassword} iconName="lock" placeholder="Senha" />
            <InputPassword value={passwordConfirmation} onChangeText={setPasswordConfirmation} iconName="lock" placeholder="Repetir Senha" />

            </Form>

            <Button onPress={handleRegister} color={theme.colors.success}  title="Cadastrar" />

        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}