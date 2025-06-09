import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'

export const TransactionsContext = createContext()

const basaHost = 'https://wedev-api.sky.pro/api/transactions'

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])
    const [periodTransactions, setPeriodTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const [filtredCategory, setFiltredCategory] = useState(null)
    const { user } = useContext(AuthContext)
     const [sortedCategory, setSortedCategory] = useState(null)
    const [period, setPeriod] = useState({
        start: '',
        end: '',
    })
    const [isEdit, setIsEdit] = useState(false)
    const [transaction, setTransaction] = useState(null)
     const [activeCategory, setActiveCategory] = useState(null)
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

    
    useEffect(() => {
        fetchTransactions()
    }, [user])

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                isLoading,
                error,
                
                fetchTransactions,
                
                setTransactions,
                filtredCategory,
                setFiltredCategory,
                sortedCategory,
                setSortedCategory,
                isEdit,
                setIsEdit,
                transaction,
                setTransaction,
                activeCategory, 
                setActiveCategory,
                periodTransactions,
                setPeriodTransactions,
                period, 
                setPeriod
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
