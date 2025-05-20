import * as S from './AuthForm.styled.js'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Button from '../Button'
import Input from '../Input'

const AuthForm = ({ isLogin, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        password: '',
    })
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { loginAut, register } = useContext(AuthContext)

    const isFormValid = isLogin
        ? formData.login && formData.password
        : formData.name && formData.login && formData.password

    const validateAuthForm = () => {
        if (!isLogin) {
            if (formData.login.length < 3) {
                setError('Логин должен содержать хотя бы 3 символа')
                return false
            }
            if (formData.password.length < 3) {
                setError('Пароль должен содержать хотя бы 3 символа')
                return false
            }
        }
        return true
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isFormValid) return // Дополнительная проверка на валидность

        if (!isLogin && !validateAuthForm()) {
            return
        }

        setError('')
        setIsSubmitting(true)

        try {
            let result
            if (isLogin) {
                result = await loginAut(formData.login, formData.password)
            } else {
                result = await register(
                    formData.name,
                    formData.login,
                    formData.password
                )
            }

            if (result.success) {
                onSuccess()
            } else {
                setError(result.error || 'Произошла неизвестная ошибка')
            }
        } catch (err) {
            setError('Неверный логин или пароль')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            {!isLogin && (
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Имя"
                    required
                />
            )}
            <Input
                type="login"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Эл. почта"
                required
            />
            <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <Button type="submit" disabled={!isFormValid || isSubmitting}>
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </S.Form>
    )
}

export default AuthForm
