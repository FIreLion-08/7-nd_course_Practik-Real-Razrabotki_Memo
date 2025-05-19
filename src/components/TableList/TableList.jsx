import { useState, useMemo, useContext, useEffect } from 'react'
import * as S from './TableList.styled.js'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'
import { getCategoryName } from '../../constants/categories.js'
import { ModalWin } from '../ModalWin/ModalWin.jsx'
import { SortModWin } from '../SortModWin/SortModWin.jsx'

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
    const { transactions, filtredCategory, sortedCategory } =
        useContext(TransactionsContext)
    const [isOpenModWin, setIsOpenModWin] = useState(false)
    const [isOpenSortModWin, setIsOpenSortModWin] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    // const expensesData = [
    //     {
    //         id: 1,
    //         description: 'Пятерочка',
    //         category: 'Еда',
    //         date: '03.07.2024',
    //         amount: '3 500 ₽',
    //     },
    //     {
    //         id: 2,
    //         description: 'Яндекс Такси',
    //         category: 'Транспорт',
    //         date: '03.07.2024',
    //         amount: '730 ₽',
    //     },
    // ]

    // Состояния для фильтрации и сортировки
    const [selectedCategory, setSelectedCategory] = useState('Все')
    const [sortOrder, setSortOrder] = useState('newest')

    // Уникальные категории для фильтра
    const categories = useMemo(() => {
        const uniqueCategories = new Set(
            transactions.map((item) => getCategoryName(item.category))
        )
        return ['Все', ...uniqueCategories]
    }, [transactions])

    // Фильтрация и сортировка данных
    const processedData = useMemo(() => {
        // Фильтрация
        const filtered =
            selectedCategory === 'Все'
                ? transactions
                : transactions.filter(
                      (item) =>
                          getCategoryName(item.category) === selectedCategory
                  )

        // Сортировка
        return [...filtered].sort((a, b) => {
            const dateA = new Date(a.date.split('.').reverse().join('-'))
            const dateB = new Date(b.date.split('.').reverse().join('-'))
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
        })
    }, [transactions, selectedCategory, sortOrder])

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

    return (
        <S.TableBox>
            <S.TableHeader>
                <S.TitleHeader>Таблица расходов</S.TitleHeader>
                <S.FilterControls>
                    <S.SFilterCategory
                        onClick={() => setIsOpenModWin((prev) => !prev)}
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
                    {/* <S.FilterSelect
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </S.FilterSelect> */}
                    <S.SSortTransaction
                        onClick={() => setIsOpenSortModWin((prev) => !prev)}
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

                    {/* <S.SortSelect
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="newest">Сначала новые</option>
                        <option value="oldest">Сначала старые</option>
                    </S.SortSelect> */}
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
                    {processedData.map((item) => (
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
