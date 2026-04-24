import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth'
import Checkout from './components/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetail from './components/ProductDetail'
import CartProvider from './context/CartContext'


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}></Route>
        </Routes>
      </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App