import { FormControl, Input, Button, Spinner, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import usergetdataaction from '../redux/UserSignup/usergetdataaction'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const init = {
        email: "",
        password: "",
    }

    const [data, setData] = useState(init)
    const toast = useToast()


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usergetdataaction())

    }, [])
    const isloading = useSelector(store => store.usergetdatareducer.isloading)
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    let tokendata = JSON.parse(localStorage.getItem("token")) || []
    let userId = JSON.parse(localStorage.getItem("userid")) || ""

    const navigate = useNavigate()
    const onSubmit = (e, data) => {
        e.preventDefault()
            toast({
                position: "center",
                title: 'Login successfull',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            localStorage.setItem("token", JSON.stringify(loginuser[0].token))
            localStorage.setItem("userId", JSON.stringify(loginuser[0].id))
            navigate("/")
        setData(init)
    }

    if (isloading) {
        return <>

            <form className='form'>
                <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='gree.500' size='xl' margin="auto" />
            </form>
        </>
    }


    return (<Box width={["95%","95%","40%","40%"]} margin="auto">
        <form className='form2' onSubmit={(e) => onSubmit(e, data)}>
            <h1>Login here please</h1>
            <FormControl className='form-controll2' width="100%">

                <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />

                <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

            </FormControl>
            <Button mt={4} colorScheme='teal' type='submit'>
                Submit
            </Button>
            <div className='divlogin'><Link to="/signup">Don't have an account Click here</Link></div>
        </form>
    </Box>
    )

}
export { LoginPage }