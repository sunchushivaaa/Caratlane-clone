

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {LoginPage}from "../pages/LoginPage"
import ProductPage from '../pages/ProductPage'
import {SignupPage} from "../pages/SignupPage"
import CartPage from "../pages/CartPage"
import PaymentPage from '../pages/PaymentPage'
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route path="/cartpage" element={<CartPage/>}/>
        <Route path="payment" element={<PaymentPage/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default Allroutes
