import { useContext, useEffect } from 'react'
import {
    ModalBox,
    SortCategoriesDate,
    SortCategoriesSum,
    SortName,
} from './SSortModWin.styled'
import { TransactionsContext } from '../../context/TransactionsContext'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export const SortModWin = () => {
    const {
        sortedCategory,
        setSortedCategory,
        setTransactions,
        fetchTransactions,
    } = useContext(TransactionsContext)
    const { user } = useContext(AuthContext)
    const Token = user.user.token
    console.log(Token)
    async function sortedWithCategory() {
        try {
            const response = await axios.get(
                `https://wedev-api.sky.pro/api/transactions?sortBy=${sortedCategory}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + Token,
                        'Content-Type': 'text/html',
                    },
                }
            )
            console.log(response.data)

            setTransactions(response.data)
        } catch (error) {
            console.error('Ошибка фильтрации:', error)
            throw error // Пробрасываем ошибку дальше
        }
    }

    useEffect(() => {
        if (sortedCategory) {
            sortedWithCategory()
        } else {
            fetchTransactions()
        }
    }, [sortedCategory])

    return (
        <ModalBox>
            <SortCategoriesDate
                onClick={() =>
                    setSortedCategory(sortedCategory === 'date' ? null : 'date')
                }
                $isActive={sortedCategory}
            >
                <SortName>Дате</SortName>
            </SortCategoriesDate>
            <SortCategoriesSum
                onClick={() =>
                    setSortedCategory(sortedCategory === 'sum' ? null : 'sum')
                }
                $isActive={sortedCategory}
            >
                <SortName>Сумме</SortName>
            </SortCategoriesSum>
        </ModalBox>
    )
}
