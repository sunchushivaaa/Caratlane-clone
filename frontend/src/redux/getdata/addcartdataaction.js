//Write the ActionCreator functions here
import axios from "axios";

import { ADD_DATA_REQUEST,ADD_DATA_SUCCESS,ADD_DATA_FAILURE,GET_CART_DATA_REQUEST,GET_CART_DATA_SUCCESS,GET_CART_DATA_FAILURE } from "./addactionType";



const adddataRequest = ()=>{
    return {type:ADD_DATA_REQUEST }
}
const adddataSuccess = (payload)=>{
    return {type:ADD_DATA_SUCCESS,payload }
}
const adddataFailure = (payload)=>{
    return {type:ADD_DATA_FAILURE,payload }
}


export const addDatatoCart =(p)=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log(token)
    console.log(p)
    dispatch(adddataRequest())
    return  axios.post(`https://gold-jittery-chameleon.cyclic.app/cart/add`,{
        headers:{
            "Authorization":token
        },
        body: JSON.stringify(p)
     })
     .then(res=>dispatch(adddataSuccess(res.data)))
     .catch((err)=>dispatch(adddataFailure(err)))
} 

//Write the ActionCreator functions here


const getcartdataRequest = ()=>{
    return {type:GET_CART_DATA_REQUEST }
}
const getcartdataSuccess = (payload)=>{
    return {type:GET_CART_DATA_SUCCESS,payload }
}
const getcartdataFailure = (payload)=>{
    return {type:GET_CART_DATA_FAILURE,payload }
}


export const getDataCart =()=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log(token)
    dispatch(getcartdataRequest())
    return  axios.get(`https://gold-jittery-chameleon.cyclic.app/cart`,{
        headers:{
            "Authorization":token
        },
     })
     .then(res=>dispatch(getcartdataSuccess(res.data)))
     .catch((err)=>dispatch(getcartdataFailure(err)))
} 
