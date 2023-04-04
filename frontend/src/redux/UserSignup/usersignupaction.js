import axios from "axios";
import * as types from "./usersignupactiontype";
const usersignupaction = (params) => (dispatch) => {
  dispatch({ type: types.POSTDATAREQUEST });
  return axios
    .post(`https://gold-jittery-chameleon.cyclic.app/user/register`, params)
    .then((r) => dispatch({ type: types.POSTDATASUCCESS, payload: r.data }))
    .catch((e) =>
      dispatch({ type: types.POSTDATAFAILURE, payload: e.message })
    );
};

export default usersignupaction;
