// NOTE: DO NOT MODIFY the intial state structure in this file.
import { GET_DATA_REQUEST,GET_DATA_SUCCESS,GET_DATA_FAILURE } from "./actionType";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  err:""
};

const datareducer = (state = initialState,{type,payload}) => {
 console.log(payload)
  switch(type){
      case GET_DATA_REQUEST:{
         return{
          ...state,
          isLoading:true,
    
         }
      }
      case GET_DATA_SUCCESS:{
        return{
         ...state,
         isLoading:false,
         data:payload 
        }
     }
     case GET_DATA_FAILURE:{
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

export { datareducer };
