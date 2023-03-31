

import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addDatatoCart } from '../redux/getdata/addcartdataaction'

const Singleproduct = (prod) => {

    const dispatch = useDispatch()

    const handle = (p)=>{
           dispatch(addDatatoCart(p))
    }

  return (
    <div>
       <Image src={prod.img1}/>
       <h2>{prod.name}</h2>
       <Button onClick={()=>handle(prod)}>Add to cart</Button>
    </div>
  )
}

export default Singleproduct
