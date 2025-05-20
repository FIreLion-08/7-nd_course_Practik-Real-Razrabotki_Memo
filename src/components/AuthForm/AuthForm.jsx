import * as S from './AuthForm.styled.js'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Button from '../Button'
import Input from '../Input/Input.jsx'

const AuthForm = ({ isLogin, onSuccess }) => {
    const { loginAut, register, savedAuthData } = useContext(AuthContext)
    
    const [formData, setFormData] = useState({
        name: '',
        login: savedAuthData.login || '',
        password: savedAuthData.password || '',
    })
    const [error, setError] = useState('')
    const [fieldErrors, setFieldErrors] = useState({
        name: false,
        login: false,
        password: false,
    })
    const [fieldValidity, setFieldValidity] = useState({
        name: false,
        login: false,
        password: false,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    // При монтировании компонента проверяем сохраненные данные
    useEffect(() => {
        if (savedAuthData.login) {
            setFieldValidity(prev => ({
                ...prev,
                login: validateField('login', savedAuthData.login)
            }))
        }
        if (savedAuthData.password) {
            setFieldValidity(prev => ({
                ...prev,
                password: validateField('password', savedAuthData.password)
            }))
        }
    }, [savedAuthData])

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim().length > 0
            case 'login':
                return value.length >= 3
            case 'password':
                return value.length >= 3
            default:
                return true
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Валидация в реальном времени
        const isValid = validateField(name, value)
        setFieldValidity((prev) => ({ ...prev, [name]: isValid }))
        setFieldErrors((prev) => ({ ...prev, [name]: !isValid }))

        // Сбрасываем общую ошибку при изменении
        if (error) setError('')
    }

    const validateForm = () => {
        const errors = {
            name: !isLogin ? !validateField('name', formData.name) : false,
            login: !validateField('login', formData.login),
            password: !validateField('password', formData.password),
        }

        setFieldErrors(errors)
        setFieldValidity({
            name: !errors.name,
            login: !errors.login,
            password: !errors.password,
        })

        if (errors.login) {
            setError('Логин должен содержать хотя бы 3 символа')
        } else if (errors.password) {
            setError('Пароль должен содержать хотя бы 3 символа')
        } else if (errors.name) {
            setError('Имя обязательно для заполнения')
        }

        return !Object.values(errors).some(Boolean)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return

        setError('')
        setIsSubmitting(true)

        try {
            const result = isLogin
                ? await loginAut(formData.login, formData.password)
                : await register(
                      formData.name,
                      formData.login,
                      formData.password
                  )

            if (result.success) {
                onSuccess()
            } else {
                setError(result.error || 'Произошла неизвестная ошибка')
                setFieldErrors({
                    name: !isLogin,
                    login: true,
                    password: true,
                })
            }
        } catch (err) {
            setError('Ошибка соединения с сервером')
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
                    isError={fieldErrors.name}
                    isValid={fieldValidity.name}
                />
            )}
            <Input
                type="login"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Эл. почта"
                required
                isError={fieldErrors.login}
                isValid={fieldValidity.login}
            />
            <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
                isError={fieldErrors.password}
                isValid={fieldValidity.password}
            />
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <Button type="submit" disabled={isSubmitting}>
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </S.Form>
    )
}

export default AuthForm