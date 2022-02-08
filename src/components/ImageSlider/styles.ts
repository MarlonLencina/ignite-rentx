import { Dimensions } from "react-native";
import styled from "styled-components/native";

interface PropsIndex {
    isActive: boolean;
}

export const Container = styled.View`

width: 100%;

`


export const ImageIndexes = styled.View`

flex-direction: row;
align-self: flex-end;
padding-right: 24px;
`


export const ImageIndex = styled.View<PropsIndex>`

width: 6px;
height: 6px;
border-radius: 3px;
background: ${props => props.isActive ? props.theme.colors.title : props.theme.colors.shape };
margin-left: 8px;

`


export const CarImageWrapper = styled.View`

width: ${Dimensions.get('window').width}px;
height: 132px;
justify-content: center;
align-items: center;

`


export const CarImage = styled.Image`

width: ${Dimensions.get('window').width}px;
height: 132px;

`

