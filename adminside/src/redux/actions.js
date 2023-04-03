import axios from "axios";
import { BASEURL } from "../apis/api";
import {
  DELETEUSER,
  UPDATEUSER,
  LOGOUTUSER,
  SUCCESSUSER,
  GETUSER,
  ERROR,
  LOADING,
  GETDATA,
  SUCCESSDATA,
  ADDDATA,
  UPDATEDATA,
  DELETEDATA,
  CLEARDATA,
  GETCATEGORIES,
  UPDATECATEGORIES,
  DELETECATEGORIES,
  ADDCATEGORIES,
  SUCCESSCATEGORIES,
} from "./actionTypes";

const GETDATAFUNCTION = () => {
  return { type: GETDATA };
};

const UPDATEDATAFUNCTION = (payload) => {
  return { type: UPDATEDATA, payload };
};

const DELETEDATAFUNCTION = (payload) => {
  return { type: DELETEDATA, payload };
};

const ADDDATAFUNCTION = (payload) => {
  return { type: ADDDATA, payload };
};

const SUCCESSDATAFUNCTION = (payload) => {
  return { type: SUCCESSDATA, payload };
};

const CLEARDATAFUNCTION = () => {
  return { type: CLEARDATA };
};

const GETUSERFUNCTION = () => {
  return { type: GETUSER };
};

const UPDATEUSERFUNCTION = (payload) => {
  return { type: UPDATEUSER, payload };
};

const DELETEUSERFUNCTION = () => {
  return { type: DELETEUSER };
};

const LOGOUTUSERFUNCTION = () => {
  return { type: LOGOUTUSER };
};

const SUCCESSUSERFUNCTION = (payload) => {
  return { type: SUCCESSUSER, payload };
};

const GETCATEGORIESFUNCTION = () => {
  return { type: GETCATEGORIES };
};

const UPDATECATEGORIESFUNCTION = (data, index) => {
  return { type: UPDATECATEGORIES, payload: { data, index } };
};

const DELETECATEGORIESFUNCTION = (payload) => {
  return { type: DELETECATEGORIES, payload };
};

const ADDCATEGORIESFUNCTION = (payload) => {
  return { type: ADDCATEGORIES, payload };
};

const SUCCESSCATEGORIESFUNCTION = (payload) => {
  return { type: SUCCESSCATEGORIES, payload };
};

const ERRORFUNCTION = () => {
  return { type: ERROR };
};

const LOADINGFUNCTION = () => {
  return { type: LOADING };
};

export const USERCALL = async (dispatch, data) => {
  dispatch(GETUSERFUNCTION());
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.post(`${BASEURL}/admin/login`, data);
    const response = await request.data;
    dispatch(SUCCESSUSERFUNCTION(response));
    return response;
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const UPDATEUSERCALL = async (dispatch, data) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.patch(`${BASEURL}/admin/login`, data);
    await request.data;
    dispatch(UPDATEUSERFUNCTION(data));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const LOGOUTUSERCALL = (dispatch) => {
  dispatch(LOGOUTUSERFUNCTION());
};

export const DELETEUSERCALL = async (dispatch, data) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.delete(`${BASEURL}/admin/login`, data);
    await request.data;
    dispatch(DELETEUSERFUNCTION(data));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const CATEGORIESCALL = (dispatch, setCategories, user) => {
  dispatch(GETCATEGORIESFUNCTION());
  dispatch(SUCCESSCATEGORIESFUNCTION(user.categories));
  setCategories(user.categories);
};

export const UPDATECATEGORIESCALL = async (dispatch, payload) => {
  dispatch(LOADINGFUNCTION());
  try {
    // const request = await axios.patch(
    //   `${BASEURL}/admin/login/categories`,
    //   payload
    // );
    // await request.data;
    dispatch(UPDATECATEGORIESFUNCTION(payload));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const DELETECATEGORIESCALL = async (dispatch, payload) => {
  dispatch(LOADINGFUNCTION());
  try {
    // const request = await axios.delete(
    //   `${BASEURL}/admin/login/categories`,
    //   payload
    // );
    // await request.data;
    dispatch(DELETECATEGORIESFUNCTION(payload));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const ADDCATEGORIESCALL = (dispatch, payload) => {
  dispatch(LOADINGFUNCTION());
  dispatch(ADDCATEGORIESFUNCTION(payload));
  // try {
  //   // const request = await axios.post(
  //   //   `${BASEURL}/admin/login/categories`,
  //   //   payload
  //   // );
  //   // await request.data;

  // } catch (err) {
  //   dispatch(ERRORFUNCTION());
  // }
};

export const DATACALL = async (dispatch, extension) => {
  dispatch(LOADINGFUNCTION());
  dispatch(GETDATAFUNCTION());
  try {
    const request = await axios.get(`${BASEURL}/${extension}`);
    const response = await request.data.Data;
    dispatch(SUCCESSDATAFUNCTION(response));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const DATAUPDATECALL = async (dispatch, { id, data }, extension) => {
  dispatch(LOADINGFUNCTION());
  try {
    const request = await axios.patch(
      `${BASEURL}/${extension}/update/${id}`,
      data
    );
    await request.data;
    dispatch(UPDATEDATAFUNCTION({ id, data }));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const DATAADDCALL = async (dispatch, extension, data) => {
  dispatch(LOADINGFUNCTION());
  dispatch(ADDDATAFUNCTION(data));
  try {
    // const request = await axios.post(`${BASEURL}/${extension}/add`, data);
    // await request.data;
    // ;
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const DATADELETECALL = async (dispatch, data, extension) => {
  dispatch(LOADINGFUNCTION());

  try {
    const request = await axios.delete(
      `${BASEURL}/${extension}/delete/${data}`
    );
    await request.data;
    dispatch(DELETEDATAFUNCTION(data));
  } catch (err) {
    dispatch(ERRORFUNCTION());
  }
};

export const DATACLEARCALL = (dispatch) => {
  dispatch(CLEARDATAFUNCTION());
};
