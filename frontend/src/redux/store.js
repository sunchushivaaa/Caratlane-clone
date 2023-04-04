import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import { datareducer } from "./getdata/reducer";
import { getcartdatareducer } from "./getdata/addreducer";
import { datareducer2, datareducer3, datareducer4 } from "./getdata/reducer";
import { addcartdatareducer } from "./getdata/addreducer";
const rootReducer = combineReducers({
  Loginreducer,
  usersignupreducer,
  datareducer,
  getcartdatareducer,
  datareducer2,
  datareducer3,
  datareducer4,
  addcartdatareducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
