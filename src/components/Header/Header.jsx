import { useContext } from 'react'
import * as S from './Header.styled.js'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

export const Header = () => {
    const { isUsed, setIsUsed } = useContext(TransactionsContext);
    const { user, logout } = useContext(AuthContext);

    const handleClick = () => {
        setIsUsed(true);
    };

    const handleClickOnAnalis = () => {
        setIsUsed(false);
    };

    return (
        <S.Header>
            <Link to={'/'} onClick={handleClick}>
                <img src="../../public/Vector.svg" />
            </Link>
            {user && (
                <>
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
                    <S.HeadExit to="/login" onClick={logout}>Выйти</S.HeadExit>
                </>
            )}
        </S.Header>
    );
};