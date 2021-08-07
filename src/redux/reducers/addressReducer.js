import {
  GET_PROVINCE_REQUEST,
  GET_PROVINCE_SUCCESS,
  GET_PROVINCE_FAIL,
  GET_DISTRICT_REQUEST,
  GET_DISTRICT_SUCCESS,
  GET_DISTRICT_FAIL,
  GET_WARD_REQUEST,
  GET_WARD_SUCCESS,
  GET_WARD_FAIL,
} from '../actions/addressAction';

const initialState = {
  province: [],
  district: [],
  ward: [],
  isFetchingProvince: false,
  isFetchingDistrict: false,
  isFetchingWard: false,
  fetchProvinceError: null,
  fetchDistrictError: null,
  fetchWardError: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROVINCE_REQUEST: {
      return {
        ...state,
        district: [],
        ward: [],
        isFetchingProvince: true,
      };
    }
    case GET_PROVINCE_SUCCESS: {
      return {
        ...state,
        isFetchingProvince: false,
        province: action.payload,
      };
    }
    case GET_PROVINCE_FAIL: {
      return {
        ...state,
        isFetchingProvince: false,
        fetchProvinceError: action.payload,
      };
    }

    case GET_DISTRICT_REQUEST: {
      return {
        ...state,
        ward: [],
        isFetchingDistrict: true,
      };
    }
    case GET_DISTRICT_SUCCESS: {
      return {
        ...state,
        isFetchingDistrict: false,
        district: action.payload,
      };
    }
    case GET_DISTRICT_FAIL: {
      return {
        ...state,
        isFetchingDistrict: false,
        fetchDistrictError: action.payload,
      };
    }

    case GET_WARD_REQUEST: {
      return {
        ...state,
        isFetchingWard: true,
      };
    }
    case GET_WARD_SUCCESS: {
      return {
        ...state,
        isFetchingWard: false,
        ward: action.payload,
      };
    }
    case GET_WARD_FAIL: {
      return {
        ...state,
        isFetchingWard: false,
        fetchWardError: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default addressReducer;
