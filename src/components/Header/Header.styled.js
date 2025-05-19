import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.nav`

    width: 100vw;
    background-color:rgb(255, 255, 255);
    color: #030303;
    display: flex;
    justify-content: space-between;
    padding: 20px 120px;
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

    &:hover {
        /* text-decoration: underline; */
        color: green;
        font-weight: 600;
        /* border-bottom: 2px solid #000; */
    }

    /* &.active {
        color: green;
        text-decoration: underline;
        font-weight: bold;
        
    } */
`

export const HeadExpenses = styled(NavLink)`
    width:105px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;

    ${props => props.$isUsed && `
        color: green;
        font-weight: 600;
        border-bottom: 2px solid green;
    `}

    &:hover {
        color: green;
        font-weight: 600;
        border-bottom: 2px solid green;
    }
`

export const HeadAnalysis = styled(NavLink)`
    width: 130px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;

    ${props => !props.$isUsed && `
        color: green;
        font-weight: 600;
        border-bottom: 2px solid green;
    `}

    &:hover {
        color: green;
        font-weight: 600;
        border-bottom: 2px solid green;
    }
`

export const HeadExit = styled(NavLink)`
    width: 50px;
    text-align: center;
    font-weight: 600;
`