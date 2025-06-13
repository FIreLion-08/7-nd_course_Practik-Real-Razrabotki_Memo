import { createContext, useState, useEffect } from 'react'
import { checkLs } from '../checkLs'

export const AuthContext = createContext()

const userHost = 'https://wedev-api.sky.pro/api/user'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(checkLs())
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    const userData = checkLs();
    setUser(userData);
    setIsLoading(false);
  }, []);

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

    const register = async (name, login, password) => {
        const result = await makeAuthRequest(
            userHost,
            { name, login, password }
        )

        if (result.success) {
            localStorage.setItem('token', result.data.user.token)
            setUser(result.data)
        }
        return result
    }

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
