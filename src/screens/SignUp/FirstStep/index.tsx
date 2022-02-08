import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Bullets, Container, Header, Title, SubTitle, Form, FormTitle} from "./styles";

import * as Yup from 'yup';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const SignUpFirstStep = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [drivenLicense, setDrivenLicense] = useState('')

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleSecondStep = async () => {
        try {
            
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório.'),
                mail: Yup.string().email().required('E-mail é obrigatório.'),
                drivenLicense: Yup.number().required('Driver license é obrigatório.'),

            })

            const data = {
                name,
                mail,
                drivenLicense
            }

            await schema.validate(data)
            navigation.navigate('SignUpSecondStep' as never, {
                user: data
            } as never)

        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert(error.message)
            }  
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
                1. Dados
            </FormTitle>

            <Input value={name} onChangeText={setName} keyboardType="email-address" iconName="user" placeholder="Nome" />
            <Input autoCapitalize="none"value={mail} onChangeText={setMail} iconName="mail" placeholder="E-mail" />
            <Input value={drivenLicense} onChangeText={setDrivenLicense} keyboardType="numeric" iconName="credit-card" placeholder="CNH" />

            </Form>
            
            <Button isEnabled={true} isLoading={false} onPress={handleSecondStep} title="Próximo" />

        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}