import styled from 'styled-components'
// import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthForm from '../components/AuthForm/AuthForm'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`

const Card = styled.div`
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
`

const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
`

const SwitchText = styled.p`
display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
`

const SwitchLink = styled(Link)`
    color: #52c41a;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`

const AuthPage = ({ isLogin }) => {
    const navigate = useNavigate()

    const handleSuccess = () => {
        navigate('/')
    }

    return (
        <Container>
            <Card>
                <Title>{isLogin ? 'Вход' : 'Регистрация'}</Title>
                <AuthForm isLogin={isLogin} onSuccess={handleSuccess} />
                <SwitchText>
                    {isLogin ? (
                        <>
                            Нужно зарегистрироваться?{' '}
                            <SwitchLink to="/register">
                                Регистрируйтесь здесь
                            </SwitchLink>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{' '}
                            <SwitchLink to="/login">Войдите здесь</SwitchLink>
                        </>
                    )}
                </SwitchText>
            </Card>
        </Container>
    )
}

export default AuthPage
