import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const userHost = 'https://wedev-api.sky.pro/api/user'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [savedAuthData, setSavedAuthData] = useState(() => {
        // Загружаем сохраненные данные формы из localStorage при инициализации
        const saved = localStorage.getItem('authFormData')
        return saved ? JSON.parse(saved) : { login: '', password: '' }
    })

    // Проверка авторизации при загрузке
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            verifyAuth(token)
        } else {
            setIsLoading(false)
        }
    }, [])

    const verifyAuth = async (token) => {
        try {
            const response = await axios.get(userHost, {
                headers: { Authorization: `Bearer ${token}` },
            })
            setUser(response.data.user)
        } catch (error) {
            console.error('Auth verification failed:', error)
            if (error.response?.status === 401) {
                // Токен недействителен
                localStorage.removeItem('token')
            } else if (error.response?.status === 500) {
                console.error('Server error during auth verification')
            }
        } finally {
            setIsLoading(false)
        }
    }

    // Сохраняем данные формы в localStorage и состояние
    const saveAuthData = (data) => {
        const dataToSave = { 
            login: data.login || '', 
            password: data.password || '' 
        }
        localStorage.setItem('authFormData', JSON.stringify(dataToSave))
        setSavedAuthData(dataToSave)
    }

    // Очищаем сохраненные данные формы
    const clearSavedAuthData = () => {
        localStorage.removeItem('authFormData')
        setSavedAuthData({ login: '', password: '' })
    }

    // Универсальный метод для авторизационных запросов
    const makeAuthRequest = async (url, data) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                const errorData = await res.json()
                if (res.status === 400) {
                    return {
                        success: false,
                        error:
                            errorData.error ||
                            'Такой пользователь уже существует',
                    }
                } else if (res.status === 500) {
                    return {
                        success: false,
                        error: 'Ошибка сервера',
                    }
                }
                return {
                    success: false,
                    error:
                        errorData.error ||
                        'Упс! Введенные вами данные не корректны.    Введите данные корректно и повторите попытку.',
                }
            }

            const response = await res.json()
            return { success: true, data: response }
        } catch (error) {
            return {
                success: false,
                error: 'Ошибка сервера',
            }
        }
    }

    // Вход пользователя
    const loginAut = async (login, password) => {
        const result = await makeAuthRequest(userHost + `/login`, {
            login,
            password,
        })
        if (result.success) {
            localStorage.setItem('token', result.data.user.token)
            setUser(result.data)
            // Очищаем сохраненные данные формы после успешного входа
            clearSavedAuthData()
        } else {
            // Сохраняем данные формы при неудачной попытке входа
            saveAuthData({ login, password })
        }
        return result
    }

    // Регистрация пользователя
    const register = async (name, login, password) => {
        const result = await makeAuthRequest(userHost, {
            name,
            login,
            password,
        })

        if (result.success) {
            localStorage.setItem('token', result.data.user.token) //Исправление регистрации
            // localStorage.setItem('token', result.data.token)
            setUser(result.data)
            // setUser(result.user.data)
            // Очищаем сохраненные данные формы после успешной регистрации
            saveAuthData({ login, password })
        } else {
            // Сохраняем данные формы при неудачной попытке регистрации
            saveAuthData({ login, password })
        }
        return result
    }

    // Выход
    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <AuthContext.Provider
            // value={{ user, isLoading, loginAut, register, logout }}
            value={{ 
                user, 
                isLoading, 
                loginAut, 
                register, 
                logout,
                savedAuthData // Добавляем сохраненные данные формы в контекст
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
