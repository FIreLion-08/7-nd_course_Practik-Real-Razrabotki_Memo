import { useContext } from 'react'
import * as S from './Header.styled.js'
import { TransactionsContext } from '../../context/TransactionsContext.jsx'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

export const Header = () => {
    
    const { user, logout } = useContext(AuthContext);

    

    return (
        <S.Header>
            <Link to={'/'}>
                <img src="../../public/Vector.svg" />
            </Link>
            {user && (
                <>
                    <S.MenuList>
                        <S.MenuItem>
                            <S.HeadExpenses
                                to={'/'}
                                className={({isActive}) => isActive ? 'active':''}
                            >
                                Мои расходы
                            </S.HeadExpenses>
                        </S.MenuItem>
                        <S.MenuItem>
                            <S.HeadAnalysis
                                to={'/analysis'}
                                className={({isActive}) => isActive ? 'active':''}
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