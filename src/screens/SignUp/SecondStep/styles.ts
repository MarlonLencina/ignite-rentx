import styled from "styled-components/native";
import theme from "../../../styles/theme";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`

padding: 0 24px;
background-color: ${props => theme.colors.background_primary};


`

export const Header = styled.View`

width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: ${getStatusBarHeight() + 31}px;

`

export const Bullets = styled.View`

flex-direction: row;
align-items: center;

`

export const Title = styled.Text`

margin-top: 60px;
margin-bottom: 16px;

font-size: ${RFValue(40)}px;
font-family: ${props => theme.fonts.secundary_600};
color: ${props => theme.colors.title};


`

export const SubTitle = styled.Text`

font-size: ${RFValue(15)}px;
font-family: ${props => theme.fonts.primary_400};
color: ${props => theme.colors.text};
line-height: 25px;

`
export const Form = styled.View`

width: 100%;
margin-top: 64px;
margin-bottom: 16px;

`

export const FormTitle = styled.Text`

margin-bottom: 24px;

font-size: ${RFValue(20)}px;
font-family: ${props => theme.fonts.secundary_500};
color: ${props => theme.colors.title};


`