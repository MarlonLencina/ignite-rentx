import { TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { BooleanLocale } from "yup/lib/locale";

interface Props {
    isFocused?: boolean;
}

export const Container = styled.View<Props>`

height: 51px;
width: 100%;
flex-direction: row;
align-items: center;
background: ${props => props.theme.colors.background_secundary};
margin-bottom: 8px;

`

export const InputText = styled(TextInput)`

flex: 1;
color: ${props => props.theme.colors.text};
font-family: ${props => props.theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
padding: 0 23px;

`

export const BoxIcon = styled.View`

width: 55px;
height: 100%;
justify-content: center;
align-items: center;
margin-right: 2px;
border-right-color: ${props => props.theme.colors.text_detail};
border-right-width: 1px;

`



export const IconContainer = styled.View`

width: 24px;
height: 56px;
justify-content: center;
align-items: center;
margin-right: 16px;

`

export const Line = styled.View`

height: 2px;
background-color: ${props => props.theme.colors.main};
position: absolute;
bottom: 0;
right: 0;
left: 0;

`