

import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Singleproduct from './SingleCartproduct'
import { getData } from '../redux/getdata/action'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
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
    const data = useSelector(store => store.datareducer.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getData())

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
        navigate("/")
    }
    console.log(formdata)
    return (
        <Box>
            <Box width="100%" height={["60px", "60px", "80px", "80px"]} boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset">
                <Box width={["10%", "10%", "5%", "5%"]} height="100%" display="flex" alignItems="center">
                    <Image width="100%" src="data:image/png;base64,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" />
                </Box>
            </Box>
            <Box display={["block", "block", "flex", "flex"]} width="100%">
                <Box width={["100%", "100%", "60%", "60%"]} position={["initial", "initial", "fixed", "fixed"]} left="0" top="20%" >
                    <Box>
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
                <Box width={["100%", "100%", "40%", "40%"]} marginLeft={["0", "0", "60%", "60%"]} border="1px solid black" overflow="scroll" >
                    {data.Data && data.Data.length > 0 && data.Data.map(ele => <Singleproduct key={ele.id} {...ele} />)}
                </Box>
            </Box>
            <Box width={["100%", "100%", "40%", "40%"]}>

            </Box>
        </Box>
    )
}

export default PaymentPage
