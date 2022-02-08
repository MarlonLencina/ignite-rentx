import React from "react";
import {Feather} from "@expo/vector-icons"

import {
    Calendar as CustomCalendar,
    LocaleConfig,
    
} from "react-native-calendars"
import { useTheme } from "styled-components";

import { PTBR } from "./localeConfig";
import { DateCallbackHandler } from "react-native-calendars";

LocaleConfig.locales['pt-br'] = PTBR
LocaleConfig.defaultLocale = 'pt-br'

interface markedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disabledTouchEvent?: boolean;
    }
}

interface CalendarProps {
    markedDates: markedDateProps;
    onDayPress: DateCallbackHandler;
}

interface dayProps {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
}

const Calendar = ({markedDates, onDayPress}: CalendarProps) => {

    const theme = useTheme()
    const date = new Date().toDateString()

    return (
        <CustomCalendar
            renderArrow={direction => <Feather size={24} color={theme.colors.shape} name={direction === "left" ? "chevron-left" : "chevron-right" } /> }
            headerStyle={{
                backgroundColor: theme.colors.background_secundary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}
            theme={{
                textDayFontFamily: theme.fonts.secundary_400,
                textDayHeaderFontFamily: theme.fonts.secundary_500,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                textMonthFontFamily: theme.fonts.secundary_600,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            firstDay={1}
            minDate={date}
            markingType='period'
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
            
    )
}

export {
    dayProps,
    Calendar,
    markedDateProps
}