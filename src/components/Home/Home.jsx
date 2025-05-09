import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import * as S from './Home.styled.js'
import { NewCard } from '../NewCard/NewCard.jsx'

export const Home = () => {
    console.log('привет')

    return (
        <S.StyleHome>
            
            <Header />

            <S.StyleExpenses>
                <S.Title>Мои расходы</S.Title>
                <NewCard/>
            </S.StyleExpenses>
            
            <Outlet />
        </S.StyleHome>
    )
}
