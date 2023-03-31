// NOTE: DO NOT MODIFY the intial state structure in this file.
import { ADD_DATA_REQUEST,ADD_DATA_SUCCESS,ADD_DATA_FAILURE ,GET_CART_DATA_REQUEST ,GET_CART_DATA_FAILURE,GET_CART_DATA_SUCCESS } from "./addactionType";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  err:""
};

const adddatareducer = (state = initialState,{type,payload}) => {
 console.log(payload)
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
         data:payload 
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

const initialState2 = {
    data: [],
    isLoading: false,
    isError: false,
    err:""
  };
  
  const getcartdatareducer = (state = initialState2,{type,payload}) => {

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
           data:payload 
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
  

export { adddatareducer,getcartdatareducer };
