import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    gap: 20px;

    @media screen and (max-width: 375px) {
        width: 100%;
        background-color: #fff;
        /* padding: 0 16px; */
    }
`

export const Card = styled.div`
    background-color: #fff;
    padding: 40px;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    @media screen and (max-width: 375px) {
        width: 100%;
        box-shadow: 0 4px 12px #fff;
        /* height: 100%; */
        display: grid;
        place-items: center;
        border-radius: 0px;
        /* padding: 0 16px; */
    }
`

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
`

export const SwitchText = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
`

export const SwitchLink = styled(Link)`
    color: #52c41a;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`
