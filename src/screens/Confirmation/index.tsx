import React, { useRef } from "react";
import { Container, Content, Title, Message, Footer } from "./styles";

import BrandSVG from "../../assets/logo_background_gray.svg"
import DoneSVG from "../../assets/done.svg"
import { Dimensions, StatusBar, useWindowDimensions, } from "react-native";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation, useRoute } from "@react-navigation/native";

interface RouteProps {
    params: {
        data: {
            message: string,
            nextScreen: string,
            title: string
        }
    }
}

export const Confirmation: React.FC = () => {

    const {params: {data: {message, nextScreen, title}}} = useRoute() as RouteProps

    const {width} = useWindowDimensions()

    const navigation = useNavigation()

    const handleGobackHome = () => {

        navigation.navigate(nextScreen as never)
        
    }

    return (
        <Container>
            <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor={'transparent'}
            />
            <BrandSVG width={width} />
            <Content>
                <DoneSVG/>
                <Title>{title}</Title>
                <Message>
                    {message}
                </Message>
            </Content>

            <Footer>
                 <ConfirmButton onPress={handleGobackHome} title="Ok!" />
            </Footer>


        </Container>
    )
}