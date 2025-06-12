import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'

export const CalendarBox = styled.div`
    max-width: 379px;

    max-height: 540px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    overflow: hidden;
`
export const CalendarHeader = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0px;
    vertical-align: middle;
    margin-left: 32px;
    margin-top: 32px;
    margin-bottom: 24px;
`
export const CustomMonthHeader = styled.div`
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
    text-transform: capitalize;
`
export const CalendarWeekDaysBox = styled.div`
display: flex;
flex-direction: row;
column-gap: 8px;
padding-left: 32px;
`
export const CalendarWeekDays = styled.div`
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0%;
color: #999999;
vertical-align: middle;
padding: 6px 12.4px;
`
export const CalendarWeekDaysBottom = styled.div`
height: 0.5px;
background-color: #999999;
width: 379px;
`

export const CustomDayPicker = styled(DayPicker)`
    --rdp-cell-size: 40px;
    --rdp-day-margin: 6px;
    --rdp-range_start-date-background-color: #f1ebfd;
    --rdp-range_start-color: #7334ea;
    --rdp-selected-border: none;
    --rdp-range_middle-background-color: #f1ebfd;
    --rdp-range_middle-color: #7334ea;
    --rdp-range_end-date-background-color: #f1ebfd;
    --rdp-range_end-color: #7334ea;
    --rdp-accent-background-color: #f1ebfd;

    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow-y: auto;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;

    .rdp-caption_label {
        text-transform: capitalize; /* Первая буква заглавная */
        font-weight: 600; /* Жирный шрифт */
        font-size: 16px;
    }

    .rdp-months {
        flex-direction: column;
        gap: 24px;
        margin: 0;
        padding: 0;
    }

    .rdp-month_grid {
    border-collapse: separate;
    border-spacing: 6px 6px;
}

    .rdp-nav {
        display: none;
    }
    .rdp-day {
        border-radius: 60px;
        color: #000000;
        
    }
    .rdp-day_button {
        font-size: 12px;
        font-weight: 400;
        width: 40px;
        height: 40px;
    }
    .rdp-weekdays {
        display: none;
    }
    .rdp-day:not(.rdp-day_selected):not(.rdp-day_range_middle):not(.rdp-day_range_start):not(.rdp-day_range_end):not([aria-selected='true']) {
    background-color: #e9ecef; /* Цвет для невыбранных дней */
}


    
`
