import React from "react-native"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"
import { 
     Footer,
     Container,
     Header,
     CarImages,
     Details,
     Description,
     Brand,
     Name,
     Rent,
     Period,
     Price,
     About,
     Accessories
     } from "./styles"
import { Accessory } from "../../components/Accessory"

import { Button } from "../../components/Button"
import { useTheme } from "styled-components"
import { useNavigation,
     useRoute } from "@react-navigation/native"
import { CarDTO } from "../../dtos/carItemDTO"
import { switchIcon } from "../../utils/iconSwitch"
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"
import { getStatusBarHeight } from "react-native-iphone-x-helper"

interface Props {
    params: {
        car: CarDTO
    }
}

export const CarDetails = () => {

    const theme = useTheme()
    const navigation = useNavigation()
    const {params: {car}} = useRoute() as Props

    const handleClickConfirm = () => {

        navigation.navigate('Schedule' as never, {
            car
        } as never)
        
    }

    const handleGoback = () => {

        navigation.goBack()
        
    }

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
      scrollY.value = event.contentOffset.y;
      console.log('teste')   
    });

    return (
        <>
            <Container>

                <Header>
                    <BackButton onPress={handleGoback}/>
                    
                </Header>

                <CarImages>

                    <ImageSlider imagesURL={car.photos} />

                </CarImages>


                <Animated.ScrollView
                    contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight(),
                    }}
                    showsVerticalScrollIndicator={false}
                    onScroll={scrollHandler}
                >
                    <Details>
                        <Description>
                            <Brand>
                                {car.brand}
                            </Brand>
                            <Name>
                                {car.name}
                            </Name>
                        </Description>
                        <Rent>
                            <Period>{car.period}</Period>
                            <Price>{`R$ ${car.price}`}</Price>
                        </Rent>
                    </Details>
                    
                    <Accessories>

                        {
                            car.accessories.map((carAccessory) => {
                                
                               return (
                                <Accessory
                                key={carAccessory.name} 
                                name={carAccessory.name}
                                Icon={switchIcon(carAccessory.type)}
                                />

                               )

                            })
                        }
                            
                    </Accessories>

                    <About>
                        {car.about}
                        {car.about}
                        {car.about}
                    </About>
                </Animated.ScrollView>

                <Footer>
                    <Button onPress={handleClickConfirm} color={theme.colors.main} title="Confirmar" />
                </Footer>

            </Container>
        </>
    )
}