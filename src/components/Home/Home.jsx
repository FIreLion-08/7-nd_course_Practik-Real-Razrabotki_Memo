import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import * as S from './Home.styled.js'
import { NewCard } from '../NewCard/NewCard.jsx'
import { TableList } from '../TableList/TableList.jsx'

export const Home = () => {
    return (
        <>
            <Header />
            <S.StyleHome>
                <S.StyleExpenses>
                    <S.Title>Мои расходы</S.Title>
                    <S.ContentBox>
                        <TableList />
                        <NewCard />
                    </S.ContentBox>
                </S.StyleExpenses>

                <Outlet />
            </S.StyleHome>
        </>
    )
}
