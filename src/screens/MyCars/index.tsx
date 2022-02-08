import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { HightlightCard } from "../../components/HighlightCard";
import { CarDTO, CarDTOFlatlist } from "../../dtos/carItemDTO";
import { api } from "../../services/api";
import {AntDesign} from '@expo/vector-icons'

import {Container, Header, Title, SubTitle, Content, Appointments, AppointmentsTitle, AppointmentsQuantity, FlatListCars, CarWrapper, CarFooter, CarFooterTitle, CarFooterPeriod, CarFooterDate} from './styles'
import { Load } from "../../components/Load";
import { LoadCar } from "../../components/LoadCar";

interface CarProps {
    id: string;
    user_id: string;
    car: CarDTO;
    startDate: string;
    endDate: string;
}

export const MyCars = () => {

    const navigation = useNavigation()
    const [cars, setCars] = useState<CarProps[]>([])
    const [loading, setLoading] = useState(true)
    const theme = useTheme()

    const handleGoback = () => {
        navigation.goBack()
    }

    useEffect(() => {

        async function fetchCars() {
            try {
                const res = await api.get('schedules_byuser/?user_id=1')
                
                const data = res.data.map(({car: CarData, startDate, endDate, user_id, id}: CarProps)=> {
                    return {
                        user_id,
                        id,
                        startDate,
                        endDate,
                        car: {
                            about: CarData.about,
                            accessories: CarData.accessories,
                            brand: CarData.brand,
                            fuel_type: CarData.fuel_type,
                            id: CarData.id,
                            name: CarData.name,
                            photos: CarData.photos,
                            thumbnail: CarData.thumbnail
                        }
                    }
                })

                setCars(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCars()
    }, [])

    return (
        <Container>
            
            <Header>
                <BackButton onPress={handleGoback} color={theme.colors.shape} />

                <Title>
                    Escolha uma {"\n"}
                    data de ínicio e {"\n"}
                    fim do aluguel
                </Title>

                <SubTitle>
                    Comforto, segurança e praticidade.
                </SubTitle>

            </Header>

            {
                loading ? <Load/> : (
                    <Content>

                <Appointments>
                    <AppointmentsTitle>
                        Agendamentos feitos
                    </AppointmentsTitle>
                    <AppointmentsQuantity>
                        {cars.length}
                    </AppointmentsQuantity>
                </Appointments>

                <FlatListCars
                data={cars}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <CarWrapper>
                                    <HightlightCard
                                        key={item.id}
                                        data={{
                                        fuel_type: item.car.fuel_type,
                                        image: item.car.photos,
                                        brand: item.car.brand,
                                        name: item.car.name,
                                        period: item.car.period,
                                        price: item.car.price
                                    }} />w
                                    <CarFooter>
                                        <CarFooterTitle>Período</CarFooterTitle>
                                        <CarFooterPeriod>

                                            <CarFooterDate>{item.startDate}</CarFooterDate>
                                            <AntDesign 
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.title}
                                            style={{
                                                marginHorizontal: 10
                                            }}
                                            />
                                            <CarFooterDate>{item.endDate}</CarFooterDate>

                                        </CarFooterPeriod>
                                    </CarFooter>
                        </CarWrapper>
                    )
                }}
                />

                    </Content>
                )
             }

        </Container>
    )
}