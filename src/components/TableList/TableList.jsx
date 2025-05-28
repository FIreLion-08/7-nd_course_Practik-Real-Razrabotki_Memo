import { useState, useMemo, useContext, useEffect } from 'react'
import * as S from './TableList.styled.js'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'
import { getCategoryName } from '../../constants/categories.js'
import { ModalWin } from '../ModalWin/ModalWin.jsx'
import { SortModWin } from '../SortModWin/SortModWin.jsx'
import { filtered, filteredAndSort, sorted } from '../../api.js'
import { AuthContext } from '../../context/AuthContext.jsx'

const formatDate = (dateString) => {
    if (!dateString) return ''

    if (dateString.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
        return dateString
    }

    const date = new Date(dateString)
    if (!isNaN(date.getTime())) {
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
    }

    return dateString
}

export const TableList = () => {
    // Данные таблицы
    const { transactions, filtredCategory, sortedCategory, setTransactions, fetchTransactions } =
        useContext(TransactionsContext)
    const { user } = useContext(AuthContext)
    const Token = user.user.token
    const [isOpenModWin, setIsOpenModWin] = useState(false)
    const [isOpenSortModWin, setIsOpenSortModWin] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')

    useEffect(() => {
        switch (filtredCategory) {
            case 'housing':
                setCategory('жилье')
                break

            case 'food':
                setCategory('еда')
                break

            case 'transport':
                setCategory('транспорт')
                break

            case 'joy':
                setCategory('развлечения')
                break

            case 'education':
                setCategory('образование')
                break
            case 'others':
                setCategory('другое')
                break
            case null:
                setCategory('')
                break

            default:
        }
    }, [filtredCategory])

    useEffect(() => {
        switch (sortedCategory) {
            case 'date':
                setSort('дате')
                break

            case 'sum':
                setSort('сумме')
                break

            case null:
                setSort('')
                break

            default:
        }
    }, [sortedCategory])

    useEffect(() => {
        const fetchData = async () => {
            if (filtredCategory && sortedCategory) {
                
                try {
                    const response = await filteredAndSort(
                        filtredCategory,
                        sortedCategory,
                        Token
                    )
                    setTransactions(response)
                    
                } catch (err) {
                    console.error('Ошибка:', err.message)
                    
                }
            } else if (filtredCategory) {
                try {
                    const response = await filtered(
                        filtredCategory,
                        Token
                    )
                    setTransactions(response)
                    
                } catch (err) {
                    console.error('Ошибка:', err.message)
                    
                }
            } else if (sortedCategory){
                try {
                    const response = await sorted(
                        sortedCategory,
                        Token
                    )
                    setTransactions(response)
                    
                } catch (err) {
                    console.error('Ошибка:', err.message)
                    
                }
            } else {
                fetchTransactions()
            }
        }
        fetchData()
    }, [filtredCategory, sortedCategory])

    return (
        <S.TableBox>
            <S.TableHeader>
                <S.TitleHeader>Таблица расходов</S.TitleHeader>
                <S.FilterControls>
                    <S.ModWinPos><S.SFilterCategory
                        onClick={() => {setIsOpenModWin((prev) => !prev)
                            setIsOpenSortModWin(false)
                        }
                            
                        }
                    >
                        Фильтровать по категории{' '}
                        {category && <S.SCategory>{category}</S.SCategory>}{' '}
                        <svg
                            width="7"
                            height="6"
                            viewBox="0 0 7 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z"
                                fill="black"
                            />
                        </svg>
                    </S.SFilterCategory>
                    {isOpenModWin && <ModalWin />}
                    </S.ModWinPos>
                    
                    <S.ModWinPos>
<S.SSortTransaction
                        onClick={() => {setIsOpenSortModWin((prev) => !prev)
                            setIsOpenModWin(false)
                        }}
                    >
                        Сортировать по{' '}
                        {sort && <S.SCategory>{sort}</S.SCategory>}{' '}
                        <svg
                            width="7"
                            height="6"
                            viewBox="0 0 7 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z"
                                fill="black"
                            />
                        </svg>
                    </S.SSortTransaction>
                    {isOpenSortModWin && <SortModWin />}
                    </S.ModWinPos>
                    
                </S.FilterControls>
            </S.TableHeader>

            <S.TableContainer>
                <S.TableHead>
                    <S.TableRow>
                        <S.TableHeaderCell>Описание</S.TableHeaderCell>
                        <S.TableHeaderCell>Категория</S.TableHeaderCell>
                        <S.TableHeaderCell>Дата</S.TableHeaderCell>
                        <S.TableHeaderCell>Сумма</S.TableHeaderCell>
                    </S.TableRow>
                </S.TableHead>

                <S.TableBody>
                    {transactions.map((item) => (
                        <S.TableRow key={item._id}>
                            <S.TableCell>{item.description}</S.TableCell>
                            <S.TableCell>
                                {getCategoryName(item.category)}
                            </S.TableCell>
                            <S.TableCell>{formatDate(item.date)}</S.TableCell>
                            <S.TableCell>{item.sum} ₽</S.TableCell>
                        </S.TableRow>
                    ))}
                </S.TableBody>
            </S.TableContainer>
        </S.TableBox>
    )
}
