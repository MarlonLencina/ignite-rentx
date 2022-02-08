import React, { useState } from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Content, Footer, Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, DateValueWrapper } from "./styles";

import ArrowSVG from "../../assets/arrow.svg"
import { Alert, StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar, dayProps, markedDateProps } from "../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { format } from "date-fns";
import { getPlatformDate } from "../../components/Calendar/getPlatformDate";
import { CarDTO } from "../../dtos/carItemDTO";


interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Props {
    params: {
        car: CarDTO
    }
}

export const Schedule: React.FC = () => {

    const [lastSelectedDay, setLastSelectedDay] = useState<dayProps>({} as dayProps)
    const [markedDate, setMarkedDate] = useState<markedDateProps>({} as markedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme()

    const {params: {car}} = useRoute() as Props

    const navigation = useNavigation()

    const handleClickScheduleDetails = () => {

        navigation.navigate('ScheduleDetails' as never, {
            car,
            dates: Array.from(Object.keys(markedDate))
        } as never)
        
    }

    const handleGoback = () => {

        navigation.goBack()
        
    }

    const handleChangeDate = (date: dayProps) => {
        let start = !lastSelectedDay.timestamp ? date : lastSelectedDay
        let end = date
        if(start.timestamp > end.timestamp){
            start = end
            end = start
        }

        setLastSelectedDay(end)

        const interval = generateInterval(start, end)

        setMarkedDate(interval)

        const firstDate = Object.keys(interval)[0]
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

        setRentalPeriod({
            endFormatted: format(getPlatformDate(new Date(endDate)),'dd/MM/yyyy'),
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
        })

    }

    return (
        <Container>

            <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor='transparent'
            />

            <Header>
                <BackButton onPress={handleGoback} color={theme.colors.shape} />

                <Title>
                    Escolha uma {"\n"}
                    data de inicio e {"\n"} 
                    fim do aluguel
                </Title>
                <RentalPeriod>

                    <DateInfo>
                        <DateTitle>
                            DE
                        </DateTitle>
                        <DateValueWrapper selected={!!rentalPeriod.startFormatted} >
                            <DateValue>
                                {rentalPeriod.startFormatted}
                            </DateValue>
                        </DateValueWrapper>
                    </DateInfo>

                    <ArrowSVG/>

                    <DateInfo>
                        <DateTitle>
                            ATE
                        </DateTitle>
                        <DateValueWrapper selected={!!rentalPeriod.endFormatted} >
                        <DateValue>
                            {rentalPeriod.endFormatted}
                        </DateValue>

                        </DateValueWrapper>

                    </DateInfo>

                </RentalPeriod>

            </Header>

                <Content>

                    <Calendar
                    
                    markedDates={markedDate}
                    onDayPress={handleChangeDate}
                    
                    />

                </Content>

                <Footer>
                        <Button isEnabled={!!rentalPeriod.startFormatted && !!rentalPeriod.endFormatted} onPress={handleClickScheduleDetails} title="Confirmar" />
                </Footer>
                
        </Container>
    )
}