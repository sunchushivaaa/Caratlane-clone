// NOTE: DO NOT MODIFY the intial state structure in this file.
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_RING_REQUEST,
  GET_RING_SUCCESS,
  GET_RING_FAILURE,
  GET_BRACELET_REQUEST,
  GET_BRACELET_SUCCESS,
  GET_BRACELET_FAILURE,
  GET_MANGALSUTRA_REQUEST,
  GET_MANGALSUTRA_SUCCESS,
  GET_MANGALSUTRA_FAILURE,
} from "./actionType";
const initialState = {
  data1: [],
  isLoading: false,
  isError: false,
  err: "",
};

const datareducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data1: payload,
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        err: payload,
      };
    }
    default:
      return state;
  }
};
const initialState2 = {
  data2: [],
  isLoading: false,
  isError: false,
  err: "",
};

const datareducer2 = (state = initialState2, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GET_RING_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_RING_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data2: payload,
      };
    }
    case GET_RING_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        err: payload,
      };
    }
    default:
      return state;
  }
};
const initialState3 = {
  data3: [],
  isLoading: false,
  isError: false,
  err: "",
};

const datareducer3 = (state = initialState3, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GET_BRACELET_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_BRACELET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data3: payload,
      };
    }
    case GET_BRACELET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        err: payload,
      };
    }
    default:
      return state;
  }
};
const initialState4 = {
  data4: [],
  isLoading: false,
  isError: false,
  err: "",
};

const datareducer4 = (state = initialState4, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GET_MANGALSUTRA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_MANGALSUTRA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data4: payload,
      };
    }
    case GET_MANGALSUTRA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        err: payload,
      };
    }
    default:
      return state;
  }
};

export { datareducer, datareducer2, datareducer3, datareducer4 };
