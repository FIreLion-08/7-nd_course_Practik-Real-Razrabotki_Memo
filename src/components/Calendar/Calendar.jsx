import { useContext, useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // Главный CSS
import 'react-date-range/dist/theme/default.css' // Тема по умолчанию
import { ru } from 'react-day-picker/locale'
import {
    CalendarBox,
    CalendarHeader,
    CalendarWeekDays,
    CalendarWeekDaysBottom,
    CalendarWeekDaysBox,
    CustomDayPicker,
} from './Calendar'
import { TransactionsContext } from '../../context/TransactionsContext'

import 'react-day-picker/style.css'

const MyDateRangePicker = () => {
    const { setPeriod } = useContext(TransactionsContext)

    const [selected, setSelected] = useState({
        from: new Date(),
        to: new Date(),
    })

    const formatDate = (date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        return `${month}-${day}-${year}`
    }

    useEffect(() => {
        setPeriod({
            start: formatDate(selected.from),
            end: formatDate(selected.to),
        })
    }, [selected, setPeriod])
    const today = new Date()

    const twoYearsAgo = new Date()
    twoYearsAgo.setFullYear(today.getFullYear() - 1)

    return (
        <CalendarBox>
            <CalendarHeader>Период</CalendarHeader>
            <CalendarWeekDaysBox>
                <CalendarWeekDays>пн</CalendarWeekDays>
                <CalendarWeekDays>вт</CalendarWeekDays>
                <CalendarWeekDays>ср</CalendarWeekDays>
                <CalendarWeekDays>чт</CalendarWeekDays>
                <CalendarWeekDays>пт</CalendarWeekDays>
                <CalendarWeekDays>сб</CalendarWeekDays>
                <CalendarWeekDays>вс</CalendarWeekDays>
            </CalendarWeekDaysBox>
            <CalendarWeekDaysBottom />
            <CustomDayPicker
                mode="range"
                selected={selected}
                onSelect={setSelected}
                locale={ru}
                month={twoYearsAgo}
                numberOfMonths={15}
                defaultMonth={new Date()}
                disableNavigation
            />
        </CalendarBox>
    )
}

export default MyDateRangePicker
