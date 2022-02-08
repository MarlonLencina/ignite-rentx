import styled from "styled-components/native";

interface Props {
    isActive?: boolean;
}

export const Container = styled.View<Props>`

width: 6px;
height: 6px;
border-radius: 3px;
background: ${props => props.isActive ? props.theme.colors.title : props.theme.colors.shape };
margin-left: 8px;

`

