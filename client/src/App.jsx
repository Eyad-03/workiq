import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import UserProfile from './pages/User/UserProfile'
import Payment from './pages/User/Payment'
import Cart from './pages/User/Cart'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/user-profile" element={<UserProfile/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
