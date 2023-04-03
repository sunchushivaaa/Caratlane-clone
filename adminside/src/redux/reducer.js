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
const initialState = {
  token: "",
  user: {},
  categories: [],
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSER: {
      return state;
    }
    case SUCCESSUSER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: payload.admin[0],
        token: payload.token,
      };
    }
    case LOGOUTUSER: {
      return { ...state, token: "", user: {} };
    }
    case DELETEUSER: {
      return { ...state, token: "", user: {} };
    }
    case UPDATEUSER: {
      return { ...state, user: { ...state.user, payload } };
    }
    case ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case GETDATA: {
      return state;
    }
    case SUCCESSDATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    case ADDDATA: {
      return { ...state, products: { ...state.products, payload } };
    }
    case UPDATEDATA: {
      const id = payload.id;
      const data = payload.data;
      const newData = state.products.map((el) => {
        if (el._id === id) {
          return { ...el, ...data };
        }
        return el;
      });
      return { ...state, products: newData, isLoading: false, isError: false };
    }
    case DELETEDATA: {
      const newData = state.products.filter((el) => {
        return el._id !== payload;
      });
      return { ...state, products: newData, isLoading: false, isError: false };
    }
    case CLEARDATA: {
      return { ...state, products: [] };
    }
    case GETCATEGORIES: {
      return state;
    }
    case SUCCESSCATEGORIES: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        categories: payload,
      };
    }
    case DELETECATEGORIES: {
      const newCategories = state.categories.filter((el) => {
        return el !== payload;
      });
      return { ...state, categories: newCategories };
    }
    case UPDATECATEGORIES: {
      const data = payload.data;
      const index = payload.index;
      const newCategories = state.categories.map((el, i) => {
        if (index === i) {
          return data;
        }
        return el;
      });
      return { ...state, categories: newCategories };
    }
    case ADDCATEGORIES: {
      return { ...state, categories: state.categories.push(payload) };
    }
    default: {
      return state;
    }
  }
};
