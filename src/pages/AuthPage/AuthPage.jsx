import * as S from './AuthPage.styled.js'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthForm from '../../components/AuthForm/AuthForm.jsx'

const AuthPage = ({ isLogin }) => {
    const navigate = useNavigate()

    const handleSuccess = () => {
        navigate('/')
    }

    return (
        <S.Container>
            <S.Card>
                <S.Title>{isLogin ? 'Вход' : 'Регистрация'}</S.Title>
                <AuthForm isLogin={isLogin} onSuccess={handleSuccess} />
                <S.SwitchText>
                    {isLogin ? (
                        <>
                            Нужно зарегистрироваться?{' '}
                            <S.SwitchLink to="/register">
                                Регистрируйтесь здесь
                            </S.SwitchLink>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{' '}
                            <S.SwitchLink to="/login">Войдите здесь</S.SwitchLink>
                        </>
                    )}
                </S.SwitchText>
            </S.Card>
        </S.Container>
    )
}

export default AuthPage
