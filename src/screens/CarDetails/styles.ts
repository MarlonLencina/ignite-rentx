import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import Animated from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(GestureHandlerRootView)`

flex: 1;
background: ${props => props.theme.colors.background_secundary};

`

export const Header = styled.View`

flex-direction: row;
justify-content: space-between;
align-items: center;

position: absolute;
margin-top: ${getStatusBarHeight() + 18}px;
margin-left: 24px;

`

export const CarImages = styled.View`

margin-top: ${getStatusBarHeight() + 32}px;

`





export const Details = styled.View`

width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 38px;


`


export const Description = styled.View`



`


export const Brand = styled.Text`

font-family: ${props => props.theme.fonts.secundary_500};
color: ${props => props.theme.colors.text_detail};
font-size: ${RFValue(10)}px;
text-transform: uppercase;


`


export const Name = styled.Text`

font-family: ${props => props.theme.fonts.secundary_500};
color: ${props => props.theme.colors.title};
font-size: ${RFValue(25)}px;
text-transform: uppercase;

`


export const Rent = styled.View``


export const Period = styled.Text`

font-family: ${props => props.theme.fonts.secundary_500};
color: ${props => props.theme.colors.text_detail};
font-size: ${RFValue(10)}px;
text-transform: uppercase;

`


export const Price = styled.Text`

font-family: ${props => props.theme.fonts.secundary_500};
color: ${props => props.theme.colors.main};
font-size: ${RFValue(25)}px;
text-transform: uppercase;

`

export const About = styled.Text`

font-family: ${props => props.theme.fonts.primary_400};
color: ${props => props.theme.colors.text};
font-size: ${RFValue(15)}px;
text-align: justify;
line-height: 25px;

margin-top: 23px;

`
export const Accessories = styled.View`

width: 100%;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
margin-top: 16px;

`

export const Footer = styled.View`

width: 100%;
background: ${props => props.theme.colors.background_primary};
padding: 24px 24px ${getBottomSpace() + 24 }px;

`