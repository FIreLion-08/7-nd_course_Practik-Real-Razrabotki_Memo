import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TransactionsProvider } from './context/TransactionsContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import AnalysisPage from './pages/AnalysisPage';
import AuthPage from './pages/AuthPage';
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './components/PrivateRoute';

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
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/analysis" element={<AnalysisPage />} />
            </Route>
            
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </TransactionsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;