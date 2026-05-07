import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import UserProfile from './pages/User/UserProfile'
import Payment from './pages/User/Payment'
import Cart from './pages/User/Cart'
import Home from './pages/User/Home'
import ServicesPage from './pages/User/ServicesPage'
import Test from './pages/User/test'
import ServiceDetailPage from './pages/User/ServiceDetailPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/user-profile" element={<UserProfile/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/service/detail" element={<ServiceDetailPage/>}/>
    
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
