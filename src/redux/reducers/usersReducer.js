import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ONE_USER_FAIL,
  GET_ONE_USER_REQUEST,
  GET_ONE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_FIELD_FAIL,
  UPDATE_USER_FIELD_REQUEST,
  UPDATE_USER_FIELD_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from '../actions/usersAction';

const initialState = {
  currentUser: null,
  data: [],
  isFetchingCurrentUser: false,
  isFetching: false,
  fetchCurrentUserError: null,
  fetchError: null,
  isUpdating: false,
  updateError: null,
  isUpdatingField: false,
  updateFieldError: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_USER_REQUEST: {
      return {
        ...state,
        isFetchingCurrentUser: true,
        fetchCurrentUserError: null,
      };
    }
    case GET_ONE_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        isFetchingCurrentUser: false,
        fetchCurrentUserError: null,
      };
    }
    case GET_ONE_USER_FAIL: {
      return {
        ...state,
        isFetchingCurrentUser: false,
        fetchCurrentUserError: action.payload,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        isUpdating: true,
        updateError: null,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isUpdating: false,
      };
    }
    case UPDATE_USER_FAIL: {
      return {
        ...state,
        isUpdating: false,
        updateError: action.payload,
      };
    }
    case GET_ALL_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        fetchError: null,
      };
    }
    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    }
    case GET_ALL_USERS_FAIL: {
      return {
        ...state,
        isFetching: false,
        fetchError: action.payload,
      };
    }
    case UPDATE_USER_FIELD_REQUEST: {
      return {
        ...state,
        isUpdatingField: true,
        updateFieldError: null,
      };
    }
    case UPDATE_USER_FIELD_SUCCESS: {
      return {
        ...state,
        isUpdatingField: false,
      };
    }
    case UPDATE_USER_FIELD_FAIL: {
      return {
        ...state,
        isUpdatingField: false,
        updateFieldError: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
