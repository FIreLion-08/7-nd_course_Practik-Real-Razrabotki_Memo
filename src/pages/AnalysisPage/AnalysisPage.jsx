import { useEffect, useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'

import { Header } from '../../components/Header/Header.jsx'
import * as S from './AnalysisPage.style.js'
import MyDateRangePicker from '../../components/Calendar/Calendar.jsx'
import ExpenseChart from '../../components/Сhart/Сhart.jsx'
import { expensesPeriod } from '../../api.js'
import { AuthContext } from '../../context/AuthContext.jsx'

const AnalysisPage = () => {
    const { user } = useContext(AuthContext)
    const Token = user.user.token

    const { period, setPeriodTransactions } = useContext(TransactionsContext)

    useEffect(() => {
        const fetchPeriodTransaction = async () => {
            if (period.start === '' || period.end === '') {
                return
            }
            try {
                const response = await expensesPeriod(period, Token)
                setPeriodTransactions(response)
            } catch (err) {
                console.error('Ошибка при загрузке транзакций:', err.message)
            }
        }

        fetchPeriodTransaction()
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
            </S.StyleAnalysisExpress>
        </S.StyleAnalysis>
    )
}

export default AnalysisPage
