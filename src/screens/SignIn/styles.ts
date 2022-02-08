import styled from "styled-components/native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`

    padding: 0 24px;
    background-color: ${props => props.theme.colors.background_primary};


`

export const Header = styled.View`

    width: 100%;
    margin-top: ${getStatusBarHeight() + 116}px;

`


export const Title = styled.Text`

font-size: ${RFValue(40)}px;
font-family: ${props => props.theme.fonts.secundary_600};
color: ${props => props.theme.colors.title};


`


export const SubTitle = styled.Text`

font-size: ${RFValue(15)}px;
font-family: ${props => props.theme.fonts.primary_400};
color: ${props => props.theme.colors.text_detail};
line-height: ${RFValue(25)}px;
margin-top: 16px;

`

export const Footer = styled.View`



`

export const Form = styled.View`

margin: 64px 0;

`