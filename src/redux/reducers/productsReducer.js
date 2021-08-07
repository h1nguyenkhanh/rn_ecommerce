import {
  GET_ONE_PRODUCT_REQUEST,
  GET_ONE_PRODUCT_SUCCESS,
  GET_ONE_PRODUCT_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  GET_PRODUCTS_FILTERS_REQUEST,
  SEND_COMMENT_REQUEST,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAIL,
} from '../actions/productsAction';

const initialState = {
  currentProduct: null,
  data: [],
  isFetchingCurrentProduct: false,
  isFetching: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
  isSearching: false,
  isCommenting: false,
  fetchCurrentProductError: null,
  fetchError: null,
  createError: null,
  updateError: null,
  deleteError: null,
  searchError: null,
  commentError: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_PRODUCT_REQUEST: {
      return {
        ...state,
        isFetchingCurrentProduct: true,
        fetchCurrentProductError: null,
      };
    }

    case GET_ONE_PRODUCT_SUCCESS: {
      return {
        ...state,
        currentProduct: action.payload,
        isFetchingCurrentProduct: false,
        fetchCurrentProductError: null,
      };
    }

    case GET_ONE_PRODUCT_FAIL: {
      return {
        ...state,
        isFetchingCurrentProduct: false,
        fetchCurrentProductError: action.payload,
      };
    }

    case GET_PRODUCTS_REQUEST:
      return {...state, isFetching: true, fetchError: null};

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        fetchError: null,
      };

    case GET_PRODUCTS_FAIL:
      return {...state, fetchError: action.payload, isFetching: false};

    case CREATE_PRODUCT_REQUEST:
      return {...state, isCreating: true, createError: null};

    case CREATE_PRODUCT_SUCCESS:
      return {...state, isCreating: false};

    case CREATE_PRODUCT_FAIL:
      return {...state, isCreating: false, createError: action.payload};

    case UPDATE_PRODUCT_REQUEST:
      return {...state, isUpdating: true, updateError: null};

    case UPDATE_PRODUCT_SUCCESS:
      return {...state, isUpdating: false};

    case UPDATE_PRODUCT_FAIL:
      return {...state, isUpdating: false, updateError: action.payload};

    case DELETE_PRODUCT_REQUEST:
      return {...state, isDeleting: true, deleteError: null};

    case DELETE_PRODUCT_SUCCESS:
      return {...state, isDeleting: false};

    case DELETE_PRODUCT_FAIL:
      return {...state, isDeleting: false, deleteError: action.payload};

    case SEARCH_PRODUCTS_REQUEST: {
      return {...state, isSearching: true, searchError: null};
    }

    case SEARCH_PRODUCTS_SUCCESS: {
      return {...state, data: action.payload, isSearching: false};
    }

    case SEARCH_PRODUCTS_FAIL: {
      return {...state, searchError: action.payload};
    }
    case GET_PRODUCTS_FILTERS_REQUEST:
      return {...state, isFetching: true, fetchError: null};

    case SEND_COMMENT_REQUEST: {
      return {
        ...state,
        isCommenting: true,
        commentError: null,
      };
    }
    case SEND_COMMENT_SUCCESS: {
      return {
        ...state,
        isCommenting: false,
      };
    }
    case SEND_COMMENT_FAIL: {
      return {
        isCommenting: false,
        commentError: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
