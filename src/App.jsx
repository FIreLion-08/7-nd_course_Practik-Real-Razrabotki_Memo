import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { TransactionsProvider } from './context/TransactionsContext'

import HomePage from './pages/HomePage'

import AnalysisPage from './pages/AnalysisPage/AnalysisPage'
import AuthPage from './pages/AuthPage/AuthPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <TransactionsProvider>
                    <Routes>
                        <Route path="/login" element={<AuthPage isLogin />} />
                        <Route path="/register" element={<AuthPage />} />

                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<HomePage />} />
                            
                            <Route
                                path="/analysis"
                                element={<AnalysisPage />}
                            />
                        </Route>

                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </TransactionsProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
