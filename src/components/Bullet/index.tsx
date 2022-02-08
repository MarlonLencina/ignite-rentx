import React from "react";
import { Container } from "./styles";

interface Props {
    isActive?: boolean;
}


export const Bullet: React.FC<Props> = ({isActive = false}) => {

    return (
        <Container isActive={isActive}/>
    )
}