import React from "react";
import { Container,
         CarInfo,
         Brand,
         Name,
         About,
         Rent,
         Period,
         Price,
         Type,
         CarImage,
} from "./styles";

import GasolineSVG from "../../assets/gasoline.svg"
import { RectButtonProps } from "react-native-gesture-handler";
import { switchIcon } from "../../utils/iconSwitch";

interface CarData {
    brand: string;
    name: string;
    period: string;
    price: number;
    image: Array<{
        id: string;
        photo: string;
    }>;
    fuel_type: string;
}

interface Props extends RectButtonProps {

    data: CarData
    
}

export const HightlightCard: React.FC<Props> = ({data, ...rest}) => {

    const MotorIcon = switchIcon(data.fuel_type)

    return (

        <Container {...rest} >
                <CarInfo>
                    <Brand>{data.brand}</Brand>
                    <Name>{data.name}</Name>

                    <About>
                        <Rent>
                            <Period>
                                {data.period}
                            </Period>
                            <Price>
                                R$ {data.price}
                            </Price>
                        </Rent>

                        <Type>
                                <MotorIcon/>
                            </Type>
                    </About>
                </CarInfo>
                <CarImage  
                resizeMode="contain"
                source={{
                    uri: data.image[0].photo
                }} />
        </Container>
    )
}