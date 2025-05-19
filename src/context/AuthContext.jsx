import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const userHost = 'https://wedev-api.sky.pro/api/user'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

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
            const response = await axios.get(
                userHost,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            setUser(response.data.user)
        } catch (error) {
            console.error('Auth verification failed:', error)
            localStorage.removeItem('token')
        } finally {
            setIsLoading(false)
        }
    }

    // Универсальный метод для авторизационных запросов
    const makeAuthRequest = async (url, data) => {
        try {
            const res = await fetch (url, {
                method: 'post',
                body: JSON.stringify(data)
            })
            const response =await res.json()
            return { success: true, data: response}
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || 'Упс! Введенные вами данные не корректны. Введите данные корректно и повторите попытку.',
            }
        }
    }

    // Вход пользователя
    const loginAut = async (login, password) => {
        const result = await makeAuthRequest(
            userHost + `/login`,
            { login, password }
        )
        if (result.success) {
            localStorage.setItem('token', result.data.user.token)
            setUser(result.data)
        }
        return result
    }

    // Регистрация пользователя
    const register = async (name, login, password) => {
        const result = await makeAuthRequest(
            userHost + `/register`,
            { name, login, password }
        )

        if (result.success) {
            localStorage.setItem('token', result.data.token)
            setUser(result.data.user)
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
            value={{ user, isLoading, loginAut, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}
