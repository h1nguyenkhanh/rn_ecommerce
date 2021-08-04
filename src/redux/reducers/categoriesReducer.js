import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from '../actions/categoriesAction';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {...state, loading: true, error: null};

    case GET_CATEGORIES_SUCCESS:
      return {...state, data: action.payload, loading: false, error: null};

    case GET_CATEGORIES_FAIL:
      return {...state, error: action.payload, loading: false};

    default:
      return state;
  }
};

export default categoriesReducer;
