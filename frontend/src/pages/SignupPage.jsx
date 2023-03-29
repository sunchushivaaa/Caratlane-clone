import { FormControl, FormErrorMessage, Checkbox, Input, Select, Button, Spinner, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import usergetdataaction from '../redux/UserSignup/usergetdataaction'

import usersignupaction from '../redux/UserSignup/usersignupaction'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const init = {
    email: "",
    password: "",
    name: "",
    phonenumber: "",
    token: null,
    cart:[],
    wish:[]
  }
  const [data, setData] = useState(init)
  const toast = useToast()
  const dispatch = useDispatch()
  const userdata = useSelector(store => store.usergetdatareducer.userdata)
  const isloading = useSelector(store=>store.usergetdatareducer.isloading)
 const navigate =useNavigate()

  useEffect(() => {
    dispatch(usergetdataaction())
  }, [])

  const handleChange = (e) => {
    const { name } = e.target
    let  val = e.target.value
    setData({ ...data, [name]: val })
  }
  const onSubmit = (e,data) => {
    e.preventDefault()
    let payload = { ...data, token: data.name }
      dispatch(usersignupaction(payload))
      toast({
        position:"top",
        title: 'Account created succesfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setData(init)
      navigate("/login")

 
  }

  if(isloading){
    return <form className='form'>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' margin="auto"/>
    
    </form>
  }

  return (<Box width={["95%","95%","40%","40%"]} margin="auto">
    <form className='form' onSubmit={(e) => onSubmit(e,data)}>
      <h1>Create account here</h1>
      <FormControl className='form-controll' width="100%">

        <Input name='name' value={data.name} onChange={handleChange} className='input' type='text' placeholder="Enter your name" />

        <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />

        <Input name="phonenumber" value={data.phonenumber} onChange={handleChange} className='input' type='number' placeholder="Enter your phone number" />

        <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

      </FormControl>
      <Button colorScheme='teal'type='submit'>
        Submit
      </Button>
      <div className='divlogin'>
      <p>Already a user <Link to="/login">Login here</Link></p>
      <Link to="/adminlogin">Admin Login</Link>
      </div>
    </form>

  </Box>
  )

}
export { SignupPage }