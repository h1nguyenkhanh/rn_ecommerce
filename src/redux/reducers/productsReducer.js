import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../actions/productsAction';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {...state, loading: true, error: null};

    case GET_PRODUCTS_SUCCESS:
      return {...state, data: action.payload, loading: false, error: null};

    case GET_PRODUCTS_FAIL:
      return {...state, error: action.payload, loading: false};

    default:
      return state;
  }
};

export default productsReducer;
