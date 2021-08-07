export const GET_PROVINCE_REQUEST = 'GET_PROVINCE_REQUEST';
export const GET_PROVINCE_SUCCESS = 'GET_PROVINCE_SUCCESS';
export const GET_PROVINCE_FAIL = 'GET_PROVINCE_FAIL';

export const GET_DISTRICT_REQUEST = 'GET_DISTRICT_REQUEST';
export const GET_DISTRICT_SUCCESS = 'GET_DISTRICT_SUCCESS';
export const GET_DISTRICT_FAIL = 'GET_DISTRICT_FAIL';

export const GET_WARD_REQUEST = 'GET_WARD_REQUEST';
export const GET_WARD_SUCCESS = 'GET_WARD_SUCCESS';
export const GET_WARD_FAIL = 'GET_WARD_FAIL';

export const getProvinceRequest = () => {
  return {
    type: GET_PROVINCE_REQUEST,
  };
};

export const getProvinceSuccess = provinceData => {
  return {
    type: GET_PROVINCE_SUCCESS,
    payload: provinceData,
  };
};

export const getProvinceFail = error => {
  return {
    type: GET_PROVINCE_FAIL,
    payload: error,
  };
};

export const getDistrictRequest = provinceId => {
  return {
    type: GET_DISTRICT_REQUEST,
    payload: provinceId,
  };
};

export const getDistrictSuccess = districtData => {
  return {
    type: GET_DISTRICT_SUCCESS,
    payload: districtData,
  };
};

export const getDistrictFail = error => {
  return {
    type: GET_DISTRICT_FAIL,
    payload: error,
  };
};

export const getWardRequest = districtId => {
  return {
    type: GET_WARD_REQUEST,
    payload: districtId,
  };
};

export const getWardSuccess = wardData => {
  return {
    type: GET_WARD_SUCCESS,
    payload: wardData,
  };
};

export const getWardFail = error => {
  return {
    type: GET_WARD_FAIL,
    payload: error,
  };
};
