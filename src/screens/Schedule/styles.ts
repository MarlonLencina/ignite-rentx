import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, {css} from "styled-components/native";

interface DateValueProps {
    selected: boolean;
}

export const Container = styled(GestureHandlerRootView)`

flex: 1;

`


export const Header = styled.View`

width: 100%;
height: 325px;
background: ${props => props.theme.colors.header};
padding: 25px;
justify-content: center;
padding-top: ${getStatusBarHeight() + 32}px;

`



export const Title = styled.Text`

color: ${props => props.theme.colors.shape};
font-family: ${props => props.theme.fonts.secundary_600};
font-size: ${RFValue(34)}px;
margin-top: 24px;

`



export const RentalPeriod = styled.View`

width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 32px 0;


`


export const DateInfo = styled.View`

width: 30%;

`


export const DateTitle = styled.Text`

color: ${props => props.theme.colors.text};
font-family: ${props => props.theme.fonts.secundary_500};
font-size: ${RFValue(10)}px;


`


export const DateValue = styled.Text`

color: ${props => props.theme.colors.shape};
font-family: ${props => props.theme.fonts.primary_500};
font-size: ${RFValue(15)}px;


`

export const DateValueWrapper = styled.View<DateValueProps>`


${props => !props.selected ? css`

border-bottom-width: 2px;
border-bottom-color: ${props => props.theme.colors.text};

` : ''}

`

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
})`


`

export const Footer = styled.View`

padding: 24px;
background: ${props => props.theme.colors.background_primary};

`

