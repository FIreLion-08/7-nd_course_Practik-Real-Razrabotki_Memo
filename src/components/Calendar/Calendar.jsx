import { useContext, useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Главный CSS
import 'react-date-range/dist/theme/default.css'; // Тема по умолчанию
import { addDays, format } from 'date-fns'; // Для работы с датами
import { ru } from 'date-fns/locale';
import { CalendarBox, CalendarHeader } from './Calendar';
import { TransactionsContext } from '../../context/TransactionsContext';

const customRussianLocale = {
  ...ru,
  localize: {
    ...ru.localize,
    day: (n) => ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][n] // 2-буквенные сокращения
  }
};

const MyDateRangePicker = () => {
  const {setPeriod} = useContext(TransactionsContext)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0), // +7 дней от текущей даты
      key: 'selection'
    }
  ]);


  const renderMonthHeader = ({ month }) => {
    return (
      <CustomMonthHeader>
        {format(month, 'LLLL yyyy', { locale: ru })}
      </CustomMonthHeader>
    );
  };

  const formatDate = (date) => {
    const day = date.getDate(); // День (1-31)
    const month = date.getMonth() + 1; // Месяц (0-11) + 1
    const year = date.getFullYear();
    
    return `${month}-${day}-${year}`; // Формат "D-M-YYYY" (12-1-2024)
  };
  
  

  useEffect(()=>{
    setPeriod({
        start: formatDate(state[0].startDate),
        end: formatDate(state[0].endDate)
      });
  }, [state] )

  

  return (
    <CalendarBox>
      <CalendarHeader>Период</CalendarHeader>  
      <DateRangePicker
        onChange={item => setState([item.selection])}
        locale={customRussianLocale} 
        showSelectionPreview={false}
        showDateDisplay={false}
        moveRangeOnFirstSelection={false}
        months={2} // Показывать 2 месяца
        ranges={state}
        direction="vertical"
        // scroll={{ enabled: true }}
        renderMonthHeader={renderMonthHeader}
      />
    </CalendarBox>
  );
};

export default MyDateRangePicker;