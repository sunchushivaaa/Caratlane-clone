
import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getDataCart } from '../redux/getdata/addcartdataaction'

const CartPage = () => {
 
  const dispatch = useDispatch()
  const cartdata = useSelector(store=>store.getcartdatareducer.data)
  console.log(cartdata)
  const navigate = useNavigate()
  useEffect(()=>{
        dispatch(getDataCart())
  },[])
  const handlePayment = ()=>{
      navigate("/payment")
  }
  return (
    <Box width="100%">
        <Box display={["block","block","flex","flex"]} border="1px solid red" width="100%">
             <Box width={["100%","100%","65%","65%"]}>

             </Box>
             <Box width={["100%","100%","30%","30%"]} >
                  <Box width="80%" >
                     <h2 as="h4">Order Summary</h2>
                     <Box width="100%" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset">
                        <Box className='order_summary_box'><p>Subtotal : </p></Box> 
                        <Box className='order_summary_box'><p>You saved : </p></Box> 
                        <Box className='order_summary_box'><p>Coupon Discount : </p></Box> 
                        <Box className='order_summary_box'><p>Delivery Charge : </p></Box> 
                        <Box className='order_summary_box'><p>TOTAL COST : </p></Box> 
                     </Box>
                     <Button onClick={()=>handlePayment()} width="100%" marginTop="2%" backgroundColor="Black" color="white">Payment</Button>
                  </Box>
             </Box>
        </Box>
    </Box>
  )
}

export default CartPage
