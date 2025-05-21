import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

export const TransactionsContext = createContext()

const basaHost = 'https://wedev-api.sky.pro/api/transactions'

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isUsed, setIsUsed] = useState(true)
    const [filtredCategory, setFiltredCategory] = useState(null)
    const { user } = useContext(AuthContext)
    const [sortedCategory, setSortedCategory] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [transaction, setTransaction] = useState(null)
    const fetchTransactions = async (params = {}) => {
        if (!user) return

        setIsLoading(true)
        setError(null)

        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(basaHost, {
                params,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setTransactions(response.data)
        } catch (err) {
            setError(
                err.response?.data?.error || 'Failed to fetch transactions'
            )
        } finally {
            setIsLoading(false)
        }
    }

    const addTransaction = async (transaction) => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.post(basaHost, transaction, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setTransactions(response.data)
            return { success: true }
        } catch (err) {
            return {
                success: false,
                error: err.response?.data?.error || 'Failed to add transaction',
            }
        }
    }

    const updateTransaction = async (id, updatedTransaction) => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.patch(
                basaHost + `/${id}`,
                updatedTransaction,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            setTransactions(response.data)
            return { success: true }
        } catch (err) {
            return {
                success: false,
                error:
                    err.response?.data?.error || 'Failed to update transaction',
            }
        }
    }

    const deleteTransaction = async (id) => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.delete(basaHost + `/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setTransactions(response.data)
            return { success: true }
        } catch (err) {
            return {
                success: false,
                error:
                    err.response?.data?.error || 'Failed to delete transaction',
            }
        }
    }

    const fetchPeriodTransactions = async (startDate, endDate) => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(basaHost + '/period', {
                params: {
                    start: startDate,
                    end: endDate,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return { success: true, data: response.data }
        } catch (err) {
            return {
                success: false,
                error:
                    err.response?.data?.error ||
                    'Failed to fetch period transactions',
            }
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [user])

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                isLoading,
                error,
                isUsed,
                setIsUsed,
                fetchTransactions,
                addTransaction,
                updateTransaction,
                deleteTransaction,
                fetchPeriodTransactions,
                setTransactions,
                filtredCategory,
                setFiltredCategory,
                sortedCategory,
                setSortedCategory,
                isEdit,
                setIsEdit,
                transaction,
                setTransaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
