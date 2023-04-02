// NOTE: DO NOT MODIFY the intial state structure in this file.
import { GET_CART_DATA_REQUEST,GET_CART_DATA_SUCCESS,GET_CART_DATA_FAILURE,ADD_DATA_FAILURE,ADD_DATA_SUCCESS,ADD_DATA_REQUEST } from "./addactionType";


const initialState2 = {
    data55: [],
    isLoading: false,
    isError: false,
    err:""
  };
  
  const getcartdatareducer = (state = initialState2,{type,payload}) => {
 console.log(payload)
    switch(type){
        case GET_CART_DATA_REQUEST:{
           return{
            ...state,
            isLoading:true,
      
           }
        }
        case GET_CART_DATA_SUCCESS:{
          return{
           ...state,
           isLoading:false,
           data55:payload 
          }
       }
       case GET_CART_DATA_FAILURE:{
        return{
         ...state,
         isLoading:false,
         isError:true,
         err:payload
        }
     }
     default :
     return state;
    }
    
  };
  const initialState = {
    data56: [],
    isLoading: false,
    isError: false,
    err:""
  };
  
  const addcartdatareducer = (state = initialState,{type,payload}) => {
   
    switch(type){
        case ADD_DATA_REQUEST:{
           return{
            ...state,
            isLoading:true,
      
           }
        }
        case ADD_DATA_SUCCESS:{
          return{
           ...state,
           isLoading:false,
           data56:payload 
          }
       }
       case ADD_DATA_FAILURE:{
        return{
         ...state,
         isLoading:false,
         isError:true,
         err:payload
        }
     }
     default :
     return state;
    }
    
  };

  const initialState3 = {
    data57: [],
    isLoading: false,
    isError: false,
    err:""
  };
  
  const updatecartdatareducer = (state = initialState3,{type,payload}) => {
   
    switch(type){
        case ADD_DATA_REQUEST:{
           return{
            ...state,
            isLoading:true,
      
           }
        }
        case ADD_DATA_SUCCESS:{
          return{
           ...state,
           isLoading:false,
           data57:payload 
          }
       }
       case ADD_DATA_FAILURE:{
        return{
         ...state,
         isLoading:false,
         isError:true,
         err:payload
        }
     }
     default :
     return state;
    }
    
  };

  const initialState4 = {
    data58: [],
    isLoading: false,
    isError: false,
    err:""
  };
  
  const deletecartdatareducer = (state = initialState4,{type,payload}) => {
   
    switch(type){
        case ADD_DATA_REQUEST:{
           return{
            ...state,
            isLoading:true,
      
           }
        }
        case ADD_DATA_SUCCESS:{
          return{
           ...state,
           isLoading:false,
           data58:payload 
          }
       }
       case ADD_DATA_FAILURE:{
        return{
         ...state,
         isLoading:false,
         isError:true,
         err:payload
        }
     }
     default :
     return state;
    }
    
  };
export { getcartdatareducer,addcartdatareducer };
