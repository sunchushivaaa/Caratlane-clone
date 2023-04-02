import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from "../pages/LoginPage"
// import ProductPage from '../pages/ProductPage'
import { SignupPage } from "../pages/SignupPage"
import CartPage from "../pages/CartPage"
import PaymentPage from '../pages/PaymentPage'
import Home from '../pages/Home'
import SingleProductPage from "../pages/SingleProductPage"
import Bracelet from '../pages/Bracelet'
import Earring from '../pages/Earring'
import Ring from '../pages/Ring'
import Mangalsutra from '../pages/Mangalsutra'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/productpage/:id' element={<SingleProductPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path='/ring' element={<Ring />} />
        <Route path='/earring' element={<Earring />} />
        <Route path='/bracelet' element={<Bracelet />} />
        <Route path='/mangalsutra' element={<Mangalsutra />} />
      </Routes>
    </div>
  );
}

export default Allroutes
