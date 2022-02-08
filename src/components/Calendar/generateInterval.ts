import { eachDayOfInterval, format } from "date-fns"
import { markedDateProps, dayProps } from "."
import theme from '../../styles/theme'
import {getPlatformDate} from './getPlatformDate'

export const generateInterval = (start: dayProps, end: dayProps) => {

    let interval: markedDateProps = {}
    const startDate = new Date(start.timestamp)
    const endDate = new Date(end.timestamp)

    eachDayOfInterval({start: startDate, end: endDate}).forEach(dateItem => {
        const date = format(getPlatformDate(dateItem), 'yyyy-MM-dd')

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date ? theme.colors.main : theme.colors.main_light,
                textColor: start.dateString === date || end.dateString === date ? theme.colors.main_light : theme.colors.main,
            }
        }
    })

    return interval

}