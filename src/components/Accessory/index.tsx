import React from "react";
import { SvgProps } from "react-native-svg";
import { Container, Name } from "./styles";

interface Props {
    name: string;
    Icon: React.FC<SvgProps>
}

export const Accessory: React.FC<Props> = ({
    Icon, name
}) => {


    return (
        <Container>
            <Icon width={32} height={32} />
            <Name>
                {name}
            </Name>
        </Container>
    )
}