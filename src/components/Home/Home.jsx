import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import * as S from './Home.styled.js'
import { TableList } from '../TableList/TableList.jsx'

export const Home = () => {
    console.log('привет')

    return (
        <S.StyleHome>
            <Outlet />
            <Header />

            <S.StyleExpenses>
                <S.Title>Мои расходы</S.Title>
                <TableList></TableList>
            </S.StyleExpenses>
        </S.StyleHome>
    )
}
