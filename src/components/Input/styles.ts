import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
    isFocused?: boolean;
    isFilled?: boolean;
}

export const Container = styled.View<Props>`

height: 51px;
width: 100%;
flex-direction: row;
align-items: center;
background: ${props => props.theme.colors.background_secundary};
margin-bottom: 8px;



`

export const InputText = styled(TextInput)<Props>`

flex: 1;
height: 100%;
color: ${props => props.theme.colors.text};
font-family: ${props => props.theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
padding: 0 23px;
 

`

export const BoxIcon = styled.View<Props>`

width: 55px;
height: 100%;
justify-content: center;
align-items: center;
margin-right: 2px;
border-right-color: ${props => props.theme.colors.text_detail};
border-right-width: 1px;



`

export const Line = styled.View`

height: 2px;
background-color: ${props => props.theme.colors.main};
position: absolute;
bottom: 0;
right: 0;
left: 0;

`