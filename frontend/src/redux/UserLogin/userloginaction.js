import axios from "axios";
import * as types from "./userloginactiontype";

export const userlogindata = (data) => (dispatch) => {
  dispatch({ type: types.LOGINDATAREQUEST });
  return axios
    .post(`https://gold-jittery-chameleon.cyclic.app/user/login`, data)
    .then((r) => dispatch({ type: types.LOGINDATASUCCESS, payload: r.data }))
    .catch((err) =>
      dispatch({ type: types.LOGINDATAFALIURE, payload: err.message })
    );
};
