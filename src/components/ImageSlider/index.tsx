import React, { useRef, useState } from "react";
import {FlatList, ViewToken} from "react-native";
import { Bullet } from "../Bullet";
import { CarImage, CarImageWrapper, Container, ImageIndexes } from "./styles";

interface Props {
    imagesURL: {
        id: string;
        photo: string;
    }[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export const ImageSlider: React.FC<Props> = ({imagesURL}) => {

    const [imageIndex, setImageIndex] = useState(0)

    const indexChange = useRef((info: ChangeImageProps) => {

        const index = info.viewableItems[0].index!

        setImageIndex(index)
    })

    return (
        <Container>
            <ImageIndexes>
                {
                    imagesURL.map((_, index) => {
                        return (
                            <Bullet key={index} isActive={index === imageIndex} />
                        )
                    })
                }
            </ImageIndexes>

            <CarImageWrapper>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChange.current}
                data={imagesURL}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                    <CarImage  resizeMode="contain" source={{
                        uri: item.photo
                    }} />
                    )
                }}
                />
                    
                </CarImageWrapper>

        </Container>
    )
}