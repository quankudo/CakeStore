import { Route, Routes } from 'react-router-dom'
import './App.css'
import CheckAuth from './components/common/CheckAuth'
import AuthLayout from './components/auth/Layout'
import AdminLayout from './components/admin_view/AdminLayout'
import Login from  './pages/auth/Login'
import Register from  './pages/auth/Register'
import AdminDashboard from './pages/admin_view/AdminDashboard'
import AdminOrders from './pages/admin_view/AdminOrders'
import AdminProducts from './pages/admin_view/AdminProducts'
import CustomerLayout from './components/customer_view/CustomerLayout'
import HomePage from './pages/customer_view/HomePage'
import UnAuth from './pages/unauth/UnAuth'
import NotFound from './pages/not-found/NotFound'
import { useSelector } from 'react-redux'

function App() {

  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );

  return (
    <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route
          path="/shop"
          element={
            // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <CustomerLayout />
            // </CheckAuth>
          }
        >
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="/unauth-page" element={<UnAuth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
