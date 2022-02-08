import { FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDTO } from "../../dtos/carItemDTO";

export const Container = styled(GestureHandlerRootView)`

flex: 1;
align-items: center;
background: ${props => props.theme.colors.background_primary};

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
font-size: ${RFValue(30)}px;
margin-top: 24px;

`
export const SubTitle = styled.Text`

color: ${props => props.theme.colors.shape};
font-family: ${props => props.theme.fonts.secundary_400};
font-size: ${RFValue(15)}px;
margin-top: 24px;

`


export const Content = styled.View`

width: 100%;
flex: 1;
padding: 0 16px;

`

export const Appointments = styled.View`

width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px 0;

`

export const AppointmentsTitle = styled.Text`

color: ${props => props.theme.colors.text};
font-family: ${props => props.theme.fonts.primary_400};
font-size: ${RFValue(15)}px;

`

export const AppointmentsQuantity = styled.Text`

color: ${props => props.theme.colors.title};
font-family: ${props => props.theme.fonts.primary_500};
font-size: ${RFValue(15)}px;

`

type FlatlistProps = {
        car: string
}

export const FlatListCars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <CarDTO>() => FlatList<CarDTO>


export const CarWrapper = styled.View`
margin-bottom: 16px;

`

export const CarFooter = styled.View`

width: 100%;
padding: 12px;
margin-top: 10px;
flex-direction: row;
align-items: center;
justify-content: space-between;

background: ${props => props.theme.colors.background_secundary};


`

export const CarFooterTitle = styled.Text`


color: ${props => props.theme.colors.text};
font-family: ${props => props.theme.fonts.secundary_500};
font-size: ${RFValue(15)}px;

`

export const CarFooterPeriod = styled.View`

flex-direction: row;
align-items: center;

`

export const CarFooterDate = styled.Text`

color: ${props => props.theme.colors.title};
font-family: ${props => props.theme.fonts.primary_400};
font-size: ${RFValue(13)}px;

`

