import { FormControl, Input, Button, Spinner, useToast, Box, FormLabel } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "../components/style.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { userlogindata } from '../redux/UserLogin/userloginaction'
const LoginPage = () => {
    const init = {
        email: "",
        password: "",
    }
    const { user,loginWithRedirect } = useAuth0();
    const [data, setData] = useState(init)
    const toast = useToast()
    let userdata = useSelector(store=>store.Loginreducer.token)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }


    // let tokendata = JSON.parse(localStorage.getItem("token")) || []
    // let userId = JSON.parse(localStorage.getItem("userid")) || ""

    const navigate = useNavigate()
    const onSubmit = (e, data) => {
        e.preventDefault()
        dispatch(userlogindata(data))
        .then((res)=>{
            if(res.payload.token){
              toast({
                position:"top",
                title: 'Login succesfully',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              localStorage.setItem("token",res.payload.token)
              setData(init)
              navigate("/productpage")
            } else{
              toast({
                position:"top",
                title:res.payload.msg,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              setData(init)
            }
          })
          .catch((err)=>{
            toast({
              position:"top",
              title: err,
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
            setData(init)
    
          })
    }

    return (<Box width={["95%", "95%", "40%", "40%"]} height={["60vh", "60vh", "50vh", "50vh"]} margin="auto" marginTop="5%">
        <form className='form' onSubmit={(e) => onSubmit(e, data)}>
            <h1>Login here please</h1>
            <FormLabel>Email</FormLabel>
            <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
            <FormLabel>Pasword</FormLabel>
            <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
            <Button mt={4} colorScheme='teal' type='submit' marginTop="3%">
                Submit
            </Button>
            <div className='divlogin'><Link to="/register">Don't have an account Click here</Link></div>
        </form>
    </Box>
    )

}
export { LoginPage }