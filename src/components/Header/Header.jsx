import { useContext } from 'react'
import * as S from './Header.styled.js'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'
import { Link } from 'react-router-dom'

export const Header = () => {
    const { isUsed, setIsUsed } = useContext(TransactionsContext)
    console.log(isUsed)

    const handleClick = () => {
        setIsUsed(true) // Меняем на противоположное
    }

    const handleClickOnAnalis = () => {
        setIsUsed(false) // Меняем на противоположное
    }

    return (
        <S.Header>
            <Link to={'/'} onClick={handleClick} $isUsed={isUsed}>
                <img src="./Vector.svg" />
            </Link>
            <S.MenuList>
                <S.MenuItem>
                    <S.HeadExpenses
                        to={'/'}
                        onClick={handleClick}
                        $isUsed={isUsed}
                    >
                        Мои расходы
                    </S.HeadExpenses>
                </S.MenuItem>
                <S.MenuItem>
                    <S.HeadAnalysis
                        to={'/analysis'}
                        onClick={handleClickOnAnalis}
                        $isUsed={isUsed}
                    >
                        Анализ расходов
                    </S.HeadAnalysis>
                </S.MenuItem>
            </S.MenuList>
            <S.HeadExit to="/login">Выйти</S.HeadExit>
        </S.Header>
    )
}
