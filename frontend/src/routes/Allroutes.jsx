

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {LoginPage}from "../pages/LoginPage"
import ProductPage from '../pages/ProductPage'
import {SignupPage} from "../pages/SignupPage"
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  )
}

export default Allroutes
