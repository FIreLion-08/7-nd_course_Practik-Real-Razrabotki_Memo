import * as S from './AuthForm.styled.js'
// import { useState, useContext, useEffect } from 'react'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Button from '../Button'

const AuthForm = ({ isLogin, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        password: '',
    })
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [validName, setValidName] = useState('empty')
    const [validLogin, setValidLogin] = useState('empty')
    const [validPass, setValidPass] = useState('empty')
    console.log(isSubmitting)

    const { loginAut, register } = useContext(AuthContext)

    const validateName = (value) => {
        if (!value || !value.trim()) return 'empty'
        if (value.trim().length < 2) return 'invalid'

        return 'valid'
    }

    const validateEmail = (value) => {
        if (!value || !value.trim()) return 'empty'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'invalid'

        return 'valid'
    }

    const validatePassword = (value) => {
        if (!value) return 'empty'
        if (value.length < 5) return 'invalid'

        return 'valid'
    }

    const isFormValid = isLogin
        ? formData.login && formData.password
        : formData.name && formData.login && formData.password

    const handleChangeName = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setValidName(validateName(value))
        setError('')
    }

    const handleChangeLogin = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setValidLogin(validateEmail(value))
        setError('')
    }

    const handleChangePass = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setValidPass(validatePassword(value))
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isFormValid) return // Дополнительная проверка на валидность
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
            console.log(err)

            setError('Неверный логин или пароль')
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        if (validLogin === 'valid' && validPass === 'valid') {
            setIsSubmitting(false)
        } else {
            setIsSubmitting(true)
        }
    }, [validName, validLogin, validPass])

    return (
        <>
            <S.Form onSubmit={handleSubmit}>
                <S.InputContainer>
                    {!isLogin && (
                        <>
                        <S.StyledInputName
                            $validName={validName}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChangeName}
                            placeholder="Имя"
                            required
                        />
                        {validName==='invalid' && <S.StarIcon>*</S.StarIcon>}
                        </>
                    )}
                </S.InputContainer>

                <S.InputContainer>
                    <S.StyledInputLogin
                        $validLogin={validLogin}
                        type="login"
                        name="login"
                        value={formData.login}
                        onChange={handleChangeLogin}
                        placeholder="Эл. почта"
                        required
                    />
                    {validLogin==='invalid' && <S.StarIcon>*</S.StarIcon>}
                </S.InputContainer>
                <S.InputContainer>
                    <S.StyledInputPass
                        $validPass={validPass}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChangePass}
                        placeholder="Пароль"
                        required
                    />
                    {validPass==='invalid' && <S.StarIcon>*</S.StarIcon>}
                </S.InputContainer>

                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <Button type="submit" disabled={isSubmitting}>
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>
            </S.Form>
        </>
    )
}

export default AuthForm
