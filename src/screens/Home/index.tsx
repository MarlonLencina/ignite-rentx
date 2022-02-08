import React, { BackHandler, StatusBar, Text } from "react-native";
import { HightlightCard } from "../../components/HighlightCard";
import { CarButton, Container, Header, TotalCars, CarList, WrapperCarButton } from "./styles";

import { RFValue } from "react-native-responsive-fontsize";

import LogoSVG from "../../assets/logo.svg"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/carItemDTO";
import { Load } from "../../components/Load";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import {Ionicons} from "@expo/vector-icons"
import { useTheme } from "styled-components";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import { LoadCar } from "../../components/LoadCar";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export const Home  = () => {

    const theme = useTheme()

    const positionY = useSharedValue(0)
    const positionX = useSharedValue(0)

    const myCarsButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: positionX.value
                },
                {
                    translateY: positionY.value
                }
            ]
        }
    })

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(e, ctx: any){
            ctx.positionX = positionX.value
            ctx.positionY = positionY.value
        },  
        onActive(e, ctx: any){
            positionX.value = ctx.positionX + e.translationX
            positionY.value = ctx.positionY + e.translationY
        },
        onEnd(){
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        }
    })

    const navigation = useNavigation()

    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(false)

    const handleClickCar = (car: CarDTO) => {

        navigation.navigate('CarDetails' as never, {
            car
        } as never)
        
    }

    const handleOpenMyCars = () => {

        navigation.navigate('MyCars' as never)
        
    }

    useEffect(() => {
        
        const loadData = () => {
            setLoading(true)
            api.get('/cars')
            .then( res => {
                console.log(res.data)
                setCars(res.data)
            })
            .catch( err => console.log(err))
            .finally(() => setLoading(false))
        }
        
        loadData()
        
    }, [])

   /*  useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    }, [])
 */
    return (
        <Container>

            <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
            />
        
        {/* <PanGestureHandler onGestureEvent={onGestureEvent}>
            <WrapperCarButton style={myCarsButtonStyle} >
                    <CarButton onPress={handleOpenMyCars}>
                        <Ionicons 
                        name="ios-car-sport"
                        size={32}
                        color={theme.colors.shape}
                        />
                    </CarButton>
            </WrapperCarButton>
        </PanGestureHandler> */}
            
            <Header>
                <LogoSVG width={RFValue(108)} height={RFValue(12)} />
                
                    {
                        !loading && <TotalCars>{`Total de ${cars.length} carros`}</TotalCars>
                    }

            </Header>


            {
                loading ? <Load/> : (
                        <CarList 
                            data={cars}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => {
                                return <HightlightCard key={item.id} onPress={() => {
                                    handleClickCar(item)
                                }} data={{
                                    fuel_type: item.fuel_type,
                                    image: item.photos,
                                    brand: item.brand,
                                    name: item.name,
                                    period: item.period,
                                    price: item.price
                                }} />
                            }}
                        />
                    )
            }

            
        </Container>
    )
}