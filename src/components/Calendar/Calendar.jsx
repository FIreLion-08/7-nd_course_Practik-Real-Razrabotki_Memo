import { useContext, useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // Главный CSS
import 'react-date-range/dist/theme/default.css' // Тема по умолчанию
import { ru } from "react-day-picker/locale"
import { CalendarBox, CalendarHeader, CalendarWeekDays, CalendarWeekDaysBottom, CalendarWeekDaysBox, CustomDayPicker } from './Calendar'
import { TransactionsContext } from '../../context/TransactionsContext'

import 'react-day-picker/style.css'

// const customRussianLocale = {
//   ...ru,
//   localize: {
//     ...ru.localize,
//     day: (n) => ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][n] // 2-буквенные сокращения
//   }
// };

const MyDateRangePicker = () => {
  const {setPeriod} = useContext(TransactionsContext)
  
  
  const [selected, setSelected] = useState({
from: new Date(),
to: new Date(),
})


  // const renderMonthHeader = ({ month }) => {
  //   return (
  //     <CustomMonthHeader>
  //       {format(month, 'LLLL yyyy', { locale: ru })}
  //     </CustomMonthHeader>
  //   );
  // };

  const formatDate = (date) => {
    const day = date.getDate(); // День (1-31)
    const month = date.getMonth() + 1; // Месяц (0-11) + 1
    const year = date.getFullYear();
    
    return `${month}-${day}-${year}`; 
  };

  useEffect(() => {
setPeriod({
start: formatDate(selected.from),
end: formatDate(selected.to)
})}, [selected, setPeriod])
 const today = new Date();
  // Дата 2 года назад
  const twoYearsAgo = new Date();
  twoYearsAgo.setFullYear(today.getFullYear() - 1);

  

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
        <CalendarWeekDaysBottom/>
      <CustomDayPicker
      mode="range"
      selected={selected}
      onSelect={setSelected}
      
      locale={ru}
      month={twoYearsAgo}
      numberOfMonths={15}
      defaultMonth={new Date()}
      disableNavigation // Скрываем кнопки навигации
      
    />
    </CalendarBox>
  );
};

export default MyDateRangePicker;