import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Loading from './Loading'

const PrivateRoute = () => {
    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loading />
    }

    return user ? <Outlet />  : <Navigate to="/login" replace />
}

export default PrivateRoute
