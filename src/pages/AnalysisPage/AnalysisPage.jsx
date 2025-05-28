import { useState, useEffect, useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'
import { format, subMonths, subYears, startOfMonth, endOfMonth } from 'date-fns'
// import Button from '../../components/Button.jsx'

import { Header } from '../../components/Header/Header.jsx'
import * as S from './AnalysisPage.style.js'
import MyDateRangePicker from '../../components/Calendar/Calendar.jsx'
import ExpenseChart from '../../components/Сhart/Сhart.jsx'
import { expensesPeriod } from '../../api.js'
import { AuthContext } from '../../context/AuthContext.jsx'

const AnalysisPage = () => {
    // const [period, setPeriod] = useState('month')
    // const [startDate, setStartDate] = useState(startOfMonth(new Date()))
    // const [endDate, setEndDate] = useState(endOfMonth(new Date()))
    // const [transactionsData, setTransactionsData] = useState([])
    const { user } = useContext(AuthContext)
    const Token = user.user.token
    
    // const [isLoading, setIsLoading] = useState(false)
    const { period, setTransactions } =
        useContext(TransactionsContext)

    // const handlePeriodChange = (newPeriod) => {
    //     setPeriod(newPeriod)
    //     const today = new Date()

    //     if (newPeriod === 'month') {
    //         setStartDate(startOfMonth(today))
    //         setEndDate(endOfMonth(today))
    //     } else if (newPeriod === 'year') {
    //         setStartDate(startOfMonth(subYears(today, 1)))
    //         setEndDate(endOfMonth(today))
    //     } else if (newPeriod === '3months') {
    //         setStartDate(startOfMonth(subMonths(today, 3)))
    //         setEndDate(endOfMonth(today))
    //     }
    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(true)
    //         try {
    //             const formattedStart = format(startDate, 'yyyy-MM-dd') // формат даты лучше записывать так
    //             const formattedEnd = format(endDate, 'yyyy-MM-dd')

    //             const result = await fetchPeriodTransactions(
    //                 formattedStart,
    //                 formattedEnd
    //             )

    //             // добавлен ? , для проверки структуры ответа (если нет, то не сломамется)
    //             setTransactionsData(result?.data?.transactions || [])
    //         } catch (error) {
    //             console.error('Ошибка загрузки данных:', error)
    //             setTransactionsData([])
    //         }
    //         setIsLoading(false)
    //     }

    //     fetchData()
    // }, [startDate, endDate]) // зависимости, чтобы следить за их изменениями

    // // добавлен ?
    // const totalAmount = transactionsData?.reduce(
    //     (sum, transaction) => sum + transaction.sum,
    //     0
    // )

    // // добавлен ?
    // const categoryTotals = transactionsData?.reduce((acc, transaction) => {
    //     if (!acc[transaction.category]) {
    //         acc[transaction.category] = 0
    //     }
    //     acc[transaction.category] += transaction.sum
    //     return acc
    // }, {})

    // if (isLoading) {
    //     return <div>Загрузка...</div>
    // }
    console.log(period);
    

    useEffect(() => {
    const fetchPeriodTransaction = async () => {
        if (period.start === '' || period.end === '') {
            return
        }
        try {
            const response = await expensesPeriod(period, Token);
            setTransactions(response);
        } catch (err) {
            console.error('Ошибка при загрузке транзакций:', err.message);
        }
    };
    
    fetchPeriodTransaction();
}, [period])

    return (
        <S.StyleAnalysis>
            <Header />
            <S.StyleAnalysisExpress>
                <S.Title>Анализ расходов</S.Title>
                <S.AnalysisBlock>
                    <MyDateRangePicker></MyDateRangePicker>
                    <ExpenseChart></ExpenseChart>
                </S.AnalysisBlock>
                {/* <S.PeriodSelector>
                    <S.PeriodButton
                        // добавлен $ в компонент
                        $active={period === 'month'}
                        onClick={() => handlePeriodChange('month')}
                    >
                        Месяц
                    </S.PeriodButton>
                    <S.PeriodButton
                        // добавлен $ в компонент
                        $active={period === '3months'}
                        onClick={() => handlePeriodChange('3months')}
                    >
                        3 месяца
                    </S.PeriodButton>
                    <S.PeriodButton
                        // добавлен $ в компонент
                        $active={period === 'year'}
                        onClick={() => handlePeriodChange('year')}
                    >
                        Год
                    </S.PeriodButton>
                </S.PeriodSelector>

                <S.Summary>
                    <S.SummaryTitle>Общие расходы за период</S.SummaryTitle>
                    <S.SummaryAmount>{totalAmount} ₽</S.SummaryAmount>
                    <div>
                        {format(startDate, 'dd.MM.yyyy')} -{' '}
                        {format(endDate, 'dd.MM.yyyy')}
                    </div>
                </S.Summary>

                <S.Categories>
                    {Object.entries(categoryTotals).map(
                        ([category, amount]) => (
                            <S.CategoryCard key={category}>
                                <S.CategoryTitle>
                                    {CATEGORIES[category]}
                                </S.CategoryTitle>
                                <S.CategoryAmount>{amount} ₽</S.CategoryAmount>
                            </S.CategoryCard>
                        )
                    )}
                </S.Categories> */}
            </S.StyleAnalysisExpress>
        </S.StyleAnalysis>
    )
}

export default AnalysisPage
