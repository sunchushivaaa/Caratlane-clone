//Write the ActionCreator functions here
import axios from "axios";
import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE,GET_RING_REQUEST,GET_RING_SUCCESS,GET_RING_FAILURE,GET_BRACELET_REQUEST,GET_BRACELET_SUCCESS,GET_BRACELET_FAILURE,GET_MANGALSUTRA_REQUEST,GET_MANGALSUTRA_SUCCESS,GET_MANGALSUTRA_FAILURE } from "./actionType";



const getdataRequest = ()=>{
    return {type:GET_DATA_REQUEST }
}
const getdataSuccess = (payload)=>{
    return {type:GET_DATA_SUCCESS,payload }
}
const getdataFailure = (payload)=>{
    return {type:GET_DATA_FAILURE,payload }
}


export const getDataRing =(id)=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log("id",id)
    dispatch(getdataRequest())
    return  axios.get(`https://gold-jittery-chameleon.cyclic.app/ring/getbyid/${id}`,{
        headers:{
            "Authorization":token
        }
     })
     .then(res=>dispatch(getdataSuccess(res.data)))
     .catch((err)=>dispatch(getdataFailure(err)))
} 
export const getDatabracelet =(id)=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log("id",id)
    dispatch({type:GET_BRACELET_REQUEST})
    return  axios.get(`https://gold-jittery-chameleon.cyclic.app/bracelet/getbyid/${id}`,{
        headers:{
            "Authorization":token
        }
     })
     .then(res=>dispatch({type:GET_BRACELET_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:GET_BRACELET_FAILURE,payload:err}))
} 
export const getDataearings =(id)=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log("id",id)
    dispatch({type:GET_RING_REQUEST})
    return  axios.get(`https://gold-jittery-chameleon.cyclic.app/earring/getbyid/${id}`,{
        headers:{
            "Authorization":token
        }
     })
     .then(res=>dispatch({type:GET_RING_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:GET_RING_FAILURE,payload:err}))
} 
export const getDatamangalsutra =(id)=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log("id",id)
    dispatch({type:GET_MANGALSUTRA_REQUEST})
    return  axios.get(`https://gold-jittery-chameleon.cyclic.app/mangalsutra/getbyid/${id}`,{
        headers:{
            "Authorization":token
        }
     })
     .then(res=>dispatch({type:GET_MANGALSUTRA_SUCCESS,payload:res.data}))
     .catch((err)=>dispatch({type:GET_MANGALSUTRA_FAILURE,payload:err}))
} 
