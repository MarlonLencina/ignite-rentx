import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {Alert, Keyboard, KeyboardAvoidingView, StatusBar} from 'react-native'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/passwordInput";
import { useAuth } from "../../hooks/auth";
import { Container, Header, Title, Form, SubTitle, Footer } from "./styles";

export const SignIn = () => {

    const {signIn} = useAuth()
    const theme = useTheme()
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNewAccount = () => {
        navigation.navigate('SignUpFirstStep' as never)
    }

    const handleSignIn = async () => {
        
        try {
            await signIn({email, password})
        } catch (error) {
            Alert.alert('Error')
        }

    }

    return (
        <KeyboardAvoidingView
        behavior="position"
        enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

        <Container>
            <StatusBar
            barStyle="dark-content"
            translucent
            />
            <Header>
                <Title>
                    Estamos{'\n'}
                    quase lá.
                </Title>
                <SubTitle>
                    Faça seu login para começar{'\n'}
                    uma experiencia incrível.
                </SubTitle>
            </Header>

            <Form>

                <Input
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                iconName="mail"
                />

                <InputPassword
                value={password}
                onChangeText={setPassword}
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                iconName="lock"
                />

            </Form>

            <Footer>

                <Button 
                enabled={true} 
                isLoading={false} 
                onPress={handleSignIn} 
                title="Login" />
                <Button
                light
                enabled={true} 
                isLoading={false} 
                onPress={handleNewAccount} 
                color={theme.colors.background_secundary}
                title="Criar conta gratuita"
                />

            </Footer>
        </Container>

        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}