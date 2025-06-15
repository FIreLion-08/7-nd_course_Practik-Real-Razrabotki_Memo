import { useContext } from 'react'
import {
    ModalBox,
    SortCategoriesDate,
    SortCategoriesSum,
    SortName,
} from './SSortModWin.styled'
import { TransactionsContext } from '../../context/TransactionsContext'

export const SortModWin = () => {
    const { sortedCategory, setSortedCategory } =
        useContext(TransactionsContext)

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
