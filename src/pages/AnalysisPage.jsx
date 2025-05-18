import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'
import { format, subMonths, subYears, startOfMonth, endOfMonth } from 'date-fns'
import Button from '../components/Button.jsx'

import { CATEGORIES } from '../constants/categories'

import { Header } from '../components/Header/Header'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
export const StyleAnalysis = styled.div`
    padding-left: 120px;
`

const Title = styled.h2`
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const PeriodSelector = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

const PeriodButton = styled.button`
    padding: 8px 16px;
    border: 1px solid ${(props) => (props.active ? '#52c41a' : '#d9d9d9')};
    border-radius: 20px;
    background-color: ${(props) => (props.active ? '#f6ffed' : '#fff')};
    color: ${(props) => (props.active ? '#52c41a' : '#000')};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        border-color: #52c41a;
    }
`

const Summary = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`

const SummaryTitle = styled.h3`
    margin-top: 0;
`

const SummaryAmount = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
`

const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
`

const CategoryCard = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const CategoryTitle = styled.h4`
    margin-top: 0;
    color: #52c41a;
`

const CategoryAmount = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const AnalysisPage = () => {
    const [period, setPeriod] = useState('month')
    const [startDate, setStartDate] = useState(startOfMonth(new Date()))
    const [endDate, setEndDate] = useState(endOfMonth(new Date()))
    const [transactionsData, setTransactionsData] = useState([])
    console.log('transactionsData', transactionsData)

    const [isLoading, setIsLoading] = useState(false)
    const { fetchPeriodTransactions } = useContext(TransactionsContext)
    console.log('fetchPeriodTransactions', fetchPeriodTransactions)

    const handlePeriodChange = (newPeriod) => {
        setPeriod(newPeriod)
        const today = new Date()

        if (newPeriod === 'month') {
            setStartDate(startOfMonth(today))
            setEndDate(endOfMonth(today))
        } else if (newPeriod === 'year') {
            setStartDate(startOfMonth(subYears(today, 1)))
            setEndDate(endOfMonth(today))
        } else if (newPeriod === '3months') {
            setStartDate(startOfMonth(subMonths(today, 3)))
            setEndDate(endOfMonth(today))
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const formattedStart = format(startDate, 'yyyy-MM-dd') // формат даты лучше записывать так
                const formattedEnd = format(endDate, 'yyyy-MM-dd')

                const result = await fetchPeriodTransactions(
                    formattedStart,
                    formattedEnd
                )

                // добавлен ? , для проверки структуры ответа (если нет, то не сломамется)
                setTransactionsData(result?.data?.transactions || [])
            } catch (error) {
                console.error('Ошибка загрузки данных:', error)
                setTransactionsData([])
            }
            setIsLoading(false)
        }

        fetchData()
    }, [startDate, endDate]) // зависимости, чтобы следить за их изменениями

    // добавлен ?
    const totalAmount = transactionsData?.reduce(
        (sum, transaction) => sum + transaction.sum,
        0
    )

    // добавлен ?
    const categoryTotals = transactionsData?.reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
            acc[transaction.category] = 0
        }
        acc[transaction.category] += transaction.sum
        return acc
    }, {})

    if (isLoading) return <div>Загрузка...</div>
    

    return (
        <>
            <Header />
            <StyleAnalysis>
                <Title>Анализ расходов</Title>
                <PeriodSelector>
                    <PeriodButton
                        // добавлен $ в компонент
                        $active={period === 'month'}
                        onClick={() => handlePeriodChange('month')}
                    >
                        Месяц
                    </PeriodButton>
                    <PeriodButton
                        // добавлен $ в компонент
                        $active={period === '3months'}
                        onClick={() => handlePeriodChange('3months')}
                    >
                        3 месяца
                    </PeriodButton>
                    <PeriodButton
                        // добавлен $ в компонент
                        $active={period === 'year'}
                        onClick={() => handlePeriodChange('year')}
                    >
                        Год
                    </PeriodButton>
                </PeriodSelector>

                <Summary>
                    <SummaryTitle>Общие расходы за период</SummaryTitle>
                    <SummaryAmount>{totalAmount} ₽</SummaryAmount>
                    <div>
                        {format(startDate, 'dd.MM.yyyy')} -{' '}
                        {format(endDate, 'dd.MM.yyyy')}
                    </div>
                </Summary>

                <Categories>
                    {Object.entries(categoryTotals).map(
                        ([category, amount]) => (
                            <CategoryCard key={category}>
                                <CategoryTitle>
                                    {CATEGORIES[category]}
                                </CategoryTitle>
                                <CategoryAmount>{amount} ₽</CategoryAmount>
                            </CategoryCard>
                        )
                    )}
                </Categories>
            </StyleAnalysis>
        </>
    )
}

export default AnalysisPage
