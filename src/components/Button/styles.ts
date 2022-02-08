import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
    color: string;
}

interface TitleProps {
    light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`

width: 100%;
padding: 19px;
align-items: center;
justify-content: center;
font-family: ${props => props.theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
background: ${props => props.color};
margin-bottom: 8px;

`
export const Title = styled.Text<TitleProps>`

font-family: ${props => props.theme.fonts.primary_500};
color: ${props => props.light ? props.theme.colors.header : props.theme.colors.shape};
font-size: ${RFValue(15)}px;

`