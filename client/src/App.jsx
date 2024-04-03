import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PolicyPage from './pages/PolicyPage'
import PageNotFound from './pages/PageNotFound'
import RegisterPage from './Auth/RegisterPage'
import LoginPage from './Auth/LoginPage'
import DashboardPage from './user/DashboardPage'
// import PrivateRoute from './components/Routes/private'
import ForgotPassword from './Auth/ForgotPassword'
// import AdminRoute from './components/Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/policy' element={<PolicyPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path="/dashboard">
          <Route path="user" element={<DashboardPage />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
        <Route path="/dashboard" >
          <Route path='admin' element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
