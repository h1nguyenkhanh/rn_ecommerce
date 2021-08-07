import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNOUT_REQUEST,
} from '../actions/authAction';

const initialState = {
  currentUser: null,
  signinError: null,
  signupError: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST: {
      return {
        ...state,
        signinError: null,
        isLoading: true,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        currentUser: action.payload,
        isLoading: false,
      };
    }
    case SIGNIN_FAIL: {
      return {
        ...state,
        isLoading: false,
        signinError: action.payload,
      };
    }
    case SIGNUP_REQUEST: {
      return {
        ...state,
        signupError: null,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        currentUser: action.payload,
        isLoading: false,
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        isLoading: false,
        signupError: action.payload,
      };
    }
    case SIGNOUT_REQUEST: {
      return {
        ...state,
        currentUser: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
