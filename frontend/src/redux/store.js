import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Loginreducer } from "./UserLogin/userloginreducer";
import usersignupreducer from "./UserSignup/usersignupreducer";
import { datareducer } from "./getdata/reducer";
import { adddatareducer } from "./getdata/addreducer";
import { getcartdatareducer } from "./getdata/addreducer";
const rootReducer = combineReducers({Loginreducer,usersignupreducer,datareducer,adddatareducer,getcartdatareducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
