import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.nav`
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    background-color: rgb(255, 255, 255);
    color: #030303;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const Logo = styled.h1`
    text-align: center;
    /* margin-bottom: 30px; */
    font-size: 14px;
    color: #030303;
`

export const HeaderLogoImg = styled.div`
    width: 143px;
    height: 20px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../public/Vector.svg');
`

export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    gap: 48px;
    size: 14px;
`

export const MenuItem = styled.li`
    /* margin-bottom: 10px; */
    display: block;
    text-align: center;
    color: #030303;
    transition: all 0.3s;
    font-weight: 400;

    &:hover,
    .active {
        color: #7334EA;
        font-weight: 600;
        border-bottom: 2px solid #7334EA;
    }

`

export const HeadExpenses = styled(NavLink)`
    width: 105px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;

    
`

export const HeadAnalysis = styled(NavLink)`
    width: 130px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;

`

export const HeadExit = styled(NavLink)`
    width: 50px;
    text-align: center;
    font-weight: 600;
`
