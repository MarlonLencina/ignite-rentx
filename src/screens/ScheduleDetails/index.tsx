import React from "react-native"
import { BackButton } from "../../components/BackButton"
import { ImageSlider } from "../../components/ImageSlider"
import { 
    
         Footer,
         Container,
         Header,
         CarImages,
         Content,
         Details,
         Description,
         Brand,
         Name,
         Rent,
         Period,
         Price,
         Accessories,
         RentalPeriod,
         CalendarIcon,
         Dateinfo,
         DateTitle,
         DateValue,
         RentalPrice,
         RentalPriceLabel,
         RentalPriceDetails,
         RentalPriceQuote,
         RentalPriceTotal

        } from "./styles"
import { Accessory } from "../../components/Accessory"

import { Button } from "../../components/Button"
import { useTheme } from "styled-components"

import { RFValue } from "react-native-responsive-fontsize"

import {Feather} from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native"
import { markedDateProps } from "../../components/Calendar"
import { CarDTO } from "../../dtos/carItemDTO"
import { switchIcon } from "../../utils/iconSwitch"
import { useEffect, useMemo, useState } from "react"
import { format } from "date-fns"
import { getPlatformDate } from "../../components/Calendar/getPlatformDate"
import { api } from "../../services/api"

interface Props {
    params: {
        car: CarDTO;
        dates: string[];
    }
}

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

export const ScheduleDetails = () => {

    const [loading, setLoading] = useState(false)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const theme = useTheme()
    const {params: {car, dates}} = useRoute() as Props;
    const navigation = useNavigation()
    const handleCompleteSchedule = () => {

        navigation.navigate('Confirmation' as never,  {
            data: {
                message: 
                `Agora é só fazer ir buscar
                ${'\n'}seu veiculo em qualquer
                ${'\n'} conssencionaria RENTX.`,
                nextScreen: 'Home',
                title: 'Agendamento Concluido.'
            }
        } as never)
    }

    const handleGoback = () => {
        navigation.goBack()
    }

    useEffect(() => {
        setRentalPeriod({
            endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])),'dd/MM/yyyy'),
            startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
        })
    }, [])

    const rentTotal = useMemo(() => {
        return (dates.length * car.price)
    }, [rentalPeriod])


    const handleConfirmRental = async () => {

        try {

        setLoading(true)
            
        const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`)

        const unavailableDates = {
            ...scheduleByCar.data.unavailable_dates,
            ...dates
        }

        const schedulesByUser = await api.post(`/schedules_byuser`, {
            user_id: 1,
            car,
            startDate: rentalPeriod.startFormatted,
            endDate: rentalPeriod.endFormatted
        })

        await api.put(`/schedules_bycars/${car.id}`, {
            unavailable_dates: unavailableDates
        })

        handleCompleteSchedule()

        } catch (error) {

            setLoading(false)
            console.log(error)

        } finally {
        }
        
    }

    return (
        <>
            <Container>

                <Header>
                    <BackButton onPress={handleGoback}/>
                    
                </Header>

                <CarImages>

                    <ImageSlider imagesURL={car.photos} />

                </CarImages>

                <Content>
                    <Details>
                        <Description>
                            <Brand>{car.brand}</Brand>
                            <Name>{car.name}</Name>
                        </Description>
                        <Rent>
                            <Period>{car.period}</Period>
                            <Price>{`R$ ${car.price}`}</Price>
                        </Rent>
                    </Details>
                    
                    <Accessories>

                            {
                                car.accessories.map(CarItemAccessory => {
                                    return <Accessory
                                    key={CarItemAccessory.name}
                                    Icon={switchIcon(CarItemAccessory.type)}
                                    name={CarItemAccessory.name} />
                                })
                            }

                    </Accessories>

                    <RentalPeriod>

                        <CalendarIcon>
                            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
                        </CalendarIcon>

                        <Dateinfo>
                            <DateTitle>
                                DE
                            </DateTitle>
                            <DateValue>
                                {rentalPeriod.startFormatted}
                            </DateValue>
                        </Dateinfo>

                        <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />
                        
                        <Dateinfo>
                            <DateTitle>
                                ATE
                            </DateTitle>
                            <DateValue>
                                {rentalPeriod.endFormatted}
                            </DateValue>
                        </Dateinfo>

                    </RentalPeriod>

                    <RentalPrice>
                        <RentalPriceLabel>TOTAL</RentalPriceLabel>
                        <RentalPriceDetails>
                            <RentalPriceQuote>
                                {
                                    `R$ ${car.price} x${dates.length} diárias`
                                }
                            </RentalPriceQuote>
                            <RentalPriceTotal>
                                {
                                `R$ ${rentTotal}`
                                }
                            </RentalPriceTotal>
                        </RentalPriceDetails>
                    </RentalPrice>

                </Content>

                <Footer>
                    <Button isLoading={loading} isEnabled={!loading} onPress={handleConfirmRental} color={theme.colors.success} title="Alugar Agora" />
                </Footer>

            </Container>
        </>
    )
}