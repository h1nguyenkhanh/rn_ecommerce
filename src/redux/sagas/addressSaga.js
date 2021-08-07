import {put, delay, fork, join, takeLatest, spawn} from 'redux-saga/effects';
import {
  GET_PROVINCE_REQUEST,
  getProvinceSuccess,
  getProvinceFail,
  GET_DISTRICT_REQUEST,
  getDistrictSuccess,
  getDistrictFail,
  GET_WARD_REQUEST,
  getWardSuccess,
  getWardFail,
} from '../actions/addressAction';
import addressApi from './../../apis/addressApi';

function* fetchProvince() {
  try {
    const fetchTask = yield spawn(addressApi.getProvince);
    yield delay(700);
    const data = yield join(fetchTask);
    yield put(getProvinceSuccess(data));
  } catch (error) {
    yield put(getProvinceFail(error));
  }
}

function* fetchDistrict(action) {
  try {
    const fetchTask = yield spawn(addressApi.getDistrict, action.payload);
    yield delay(700);
    const data = yield join(fetchTask);
    yield put(getDistrictSuccess(data));
  } catch (error) {
    yield put(getDistrictFail(error));
  }
}

function* fetchWard(action) {
  try {
    const fetchTask = yield spawn(addressApi.getWard, action.payload);
    yield delay(700);
    const data = yield join(fetchTask);
    yield put(getWardSuccess(data));
  } catch (error) {
    yield put(getWardFail(error));
  }
}

function* watchAddressRequest() {
  yield takeLatest(GET_PROVINCE_REQUEST, fetchProvince);
  yield takeLatest(GET_DISTRICT_REQUEST, fetchDistrict);
  yield takeLatest(GET_WARD_REQUEST, fetchWard);
}

export default watchAddressRequest;
