
import { Box, Button, Flex, Heading, Image, Input, HStack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getDataCart } from '../redux/getdata/addcartdataaction'
import Singleproduct from './SingleCartproduct'
import Slider from '../components/Carasul'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Spinner } from '@chakra-ui/react'
const CartPage = () => {
 


const navigate = useNavigate()
  const [price,setPrice] = useState(0)
  const [coupon,setCoupon] = useState(false)
  
  const dispatch = useDispatch()
  const data = useSelector(store=>store.getcartdatareducer.data55)
  const isLoading = useSelector(store=>store.getcartdatareducer.isLoading)
  
 console.log(isLoading)

  useEffect(() => {
    dispatch(getDataCart())
  
    let q = data && data.length>0 && data.reduce((i,ele)=>{
      let newdata = ele.quantity*ele.MRP+i
      return newdata
  },0)
  setPrice(q)


  }, [coupon]) 
  const handlePayment = ()=>{
      navigate("/payment")
  }




  return (
    <Box width="100%">
         <Box width="100%"   background="white" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset">
               <Navbar/>
            </Box>
        <Box display={["block","block","flex","flex"]}  width="100%" marginTop="1%">
          {
            isLoading ?    <Box width={["100%","100%","65%","65%"]} display="flex" justifyContent="center" alignItems="center"  height="400px">
                 <Spinner size="xl"/>
            </Box> :  <Box width={["100%","100%","65%","65%"]} >
             { data && data.length>0 && data.map(ele=><Singleproduct setCoupon={setCoupon} coupon={coupon} key={ele.id} {...ele}/>)}
             </Box>
          }
            
             <Box width={["100%","100%","30%","30%"]} >
                  <Box width="80%" margin="auto" marginTop="4%"  >
                     <h2 as="h4">Order Summary</h2>
                     <Box width="100%" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset">
                        <Box className='order_summary_box'><p>Subtotal :            {price} </p></Box> 
                        <Box className='order_summary_box'><p>Coupon Discount :            0%</p></Box> 
                        <Box className='order_summary_box'><p>Delivery Charge :           free </p></Box> 
                        <Box className='order_summary_box'><p>TOTAL COST :         {price} </p></Box> 
                     </Box>
                     <Button onClick={()=>handlePayment()} width="100%" marginTop="2%" backgroundColor="Black" color="white">Payment</Button>
                  </Box>
             </Box>
        </Box>
        <Footer/>
    </Box>
  )
}

export default CartPage
