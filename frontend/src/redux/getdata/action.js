//Write the ActionCreator functions here
import axios from "axios";
import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionType";




const getdataRequest = ()=>{
    return {type:GET_DATA_REQUEST }
}
const getdataSuccess = (payload)=>{
    return {type:GET_DATA_SUCCESS,payload }
}
const getdataFailure = (payload)=>{
    return {type:GET_DATA_FAILURE,payload }
}


export const getData =(alldata)=> (dispatch)=>{
    let token = localStorage.getItem("token")
    console.log(token)
    dispatch(getdataRequest())
    return  axios.get(`http://localhost:8000/ring`,{
        headers:{
            "Authorization":token
        }
     })
     .then(res=>dispatch(getdataSuccess(res.data)))
     .catch((err)=>dispatch(getdataFailure(err)))
} 
