//Write the ActionCreator functions here
import axios from "axios";

import { GET_CART_DATA_REQUEST,GET_CART_DATA_SUCCESS,GET_CART_DATA_FAILURE,ADD_DATA_FAILURE,ADD_DATA_SUCCESS,ADD_DATA_REQUEST,UPDATE_CART_FAILURE,UPDATE_CART_SUCCESS,UPDATE_CART_REQUEST,DELETE_CART_FAILURE,DELETE_CART_SUCCESS,DELETE_CART_REQUEST } from "./addactionType";




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

    dispatch(getcartdataRequest())
    return  axios.get(`https://gold-jittery-chameleon.cyclic.app/cart`,{
        headers:{
            "Authorization":token
        },
     })
     .then(res=>dispatch(getcartdataSuccess(res.data)))
     .catch((err)=>dispatch(getcartdataFailure(err)))
} 

export const addDataCart =(data)=> (dispatch)=>{
    let token = localStorage.getItem("token")
 
    dispatch({type:ADD_DATA_REQUEST})
    return  axios.post(`https://gold-jittery-chameleon.cyclic.app/cart/add`,data,{
        headers:{
            "Authorization":token
        },
        
     })
     .then(res=>dispatch({type:ADD_DATA_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:ADD_DATA_FAILURE,payload:err}))
} 

export const updateDataCart =(data)=> (dispatch)=>{
    let token = localStorage.getItem("token")

    dispatch({type:UPDATE_CART_REQUEST})
    return  axios.patch(`https://gold-jittery-chameleon.cyclic.app/cart/patch/${data._id}`,data,{
        headers:{
            "Authorization":token
        },

     })
     .then(res=>dispatch({type:UPDATE_CART_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:UPDATE_CART_FAILURE}))
} 

export const deleteDataCart =(data)=> (dispatch)=>{
    let token = localStorage.getItem("token")

    dispatch({type:DELETE_CART_REQUEST})
    return  axios.post(`https://gold-jittery-chameleon.cyclic.app/cart/delete/${data}`,{
        headers:{
            "Authorization":token
        },
      
     })
     .then(res=>dispatch({type:DELETE_CART_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:DELETE_CART_FAILURE}))
} 