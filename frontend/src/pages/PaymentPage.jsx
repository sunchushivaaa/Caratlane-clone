





import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Singleproduct from './SingleCartproduct'
import { getDataRing } from '../redux/getdata/action'
import { Spinner, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getDataCart } from '../redux/getdata/addcartdataaction'
import "../App.css"
const PaymentPage = () => {
    const [price,setPrice] = useState(0)
    const toast = useToast()
    const init = {
        first_name: "",
        last_name: "",
        phone_number: "",
        city: "",
        state: "",
        house: "",
        pin_code: "",
        card_number: "",
        expiry_date: "",
        cvv: ""
    }
    const [formdata, setFormdata] = useState(init)
    const data = useSelector(store=>store.getcartdatareducer.data55)
    const isLoading = useSelector(store=>store.getcartdatareducer.isLoading)
    console.log(data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getDataCart())
        let q = data && data.length>0 && data.reduce((i,ele)=>{
            let newdata = ele.quantity*ele.MRP+i
            return newdata
        },0)
        setPrice(q)

    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormdata({ ...formdata, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        toast({
            position: "top",
            title: "Your Order has been booked",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        setFormdata(init)

        setTimeout(()=>{
            navigate("/")
        },5000)
      
    }
    console.log(formdata)
    return (
        <Box>
            <Box width="100%" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset">
             <Navbar/>
            </Box>
            <Box display={["block", "block", "flex", "flex"]} width="100%">
                <Box width={["100%", "100%", "60%", "60%"]}  top="20%" >
                    <Box marginTop="5%">
                        <h2>Shipping Address</h2>
                        <Box className='order_box' marginTop="5%" >
                            <form onSubmit={handleSubmit} gap="10px">
                                <Input placeholder='First Name' name="first_name" onChange={handleChange} required />
                                <Input placeholder='Street & House Number' name="house" onChange={handleChange} required />
                                <Input placeholder='Last Name' name="last_name" onChange={handleChange} required />
                                <Input placeholder='City' name="city" onChange={handleChange} required />
                                <select name="state" onChange={handleChange} required>
                                    <option value="Uttar Pradesh" > Uttar Pradesh</option>
                                    <option value="Maha Rashtra"> Maha Rashtra </option>
                                    <option value="Delhi">Delhi  </option>
                                    <option value="Bihar"> Bihar </option>
                                    <option value="Madhya Pradesh">Madhya Pradesh  </option>
                                    <option value="Uttar Pradesh"> Uttar Pradesh</option>
                                    <option value="Maha Rashtra"> Maha Rashtra </option>
                                    <option value="Delhi">Delhi  </option>
                                    <option value="Bihar"> Bihar </option>
                                    <option value="Madhya Pradesh">Madhya Pradesh  </option>
                                    <option value="Karnatak">Karnatak</option>
                                    <option value=" Andhra Pradesh"> Andhra Pradesh </option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Gujrat"> Gujrat </option>
                                    <option value="Tamilnadu">Tamilnadu </option>
                                    <option value="Telangana"> Telangana</option>
                                    <option value=" West Bengal"> West Bengal</option>
                                    <option value="Punjab">Punjab </option>
                                    <option value="Hariyana"> Hariyana </option>
                                    <option value="Himanchal Pradesh "> Himanchal Pradesh </option>
                                    <option value="Uttra Khand">Uttra Khand</option>
                                    <option value="Goa"> Goa</option>
                                    <option value="Rajasthan">Rajasthan </option>
                                    <option value="Sikkim"> Sikkim </option>
                                    <option value=" Arunanchal Pradesh "> Arunanchal Pradesh </option>
                                    <option value="Tripura"> Tripura</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Odisha"> Odisha</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Chhatisgarh"> Chhatisgarh </option>
                                    <option value=" Meghalaya "> Meghalaya </option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Jammu Kashmir"> Jammu Kashmir</option>
                                    <option value="Laddakh">Laddakh</option>
                                    <option value="Chhatisgarh"> Chhatisgarh </option>
                                    <option value=" Manipur "> Manipur </option>
                                    <option value="Mizoram">Mizoram</option>
                                </select>
                                <Input placeholder='Phone Number' name="phone_number" onChange={handleChange} required />
                                <Input placeholder='Pin-Code' name="pin_code" onChange={handleChange} required />
                                <Input placeholder='Card Number' name="card_number" maxLength={16} minLength={16} onChange={handleChange} required />
                                <Input placeholder='Expire Date' name="expiry_date" maxLength={5} minLength={5} onChange={handleChange} required />
                                <Input placeholder='Enter Your CVV' name="cvv" maxLength={3} minLength={3} type="number" onChange={handleChange} required />
                                <Input type="submit" backgroundColor="teal" />
                            </form>
                        </Box>
                    </Box>
                </Box>
                <Box width={["100%", "100%", "40%", "40%"]}  >
                {
            isLoading ?    <Box width={["100%","100%","65%","65%"]} display="flex" justifyContent="center" alignItems="center"  height="400px">
                 <Spinner size="xl"/>
            </Box> :  <Box width="100%" >
             { data && data.length>0 && data.map(ele=><Singleproduct key={ele.id} {...ele}/>)}
             
             </Box>
          }
          <Box display="flex" width="50%" margin="auto" justifyContent="space-between" marginTop="5%" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" alignItems="center" height="40px">
             <h2> Totol Price : </h2>
             <h2>{price}</h2>
          </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}

export default PaymentPage
