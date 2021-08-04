import {call, put, select, takeLatest} from 'redux-saga/effects';
import {
  GET_PRODUCTS_REQUEST,
  CREATE_PRODUCT_REQUEST,
  getProductsSuccess,
} from '../actions/productsAction';
import productsApi from './../../apis/productsApi';

function* fetchProducts() {
  try {
    const data = yield call(productsApi.get);
    yield put(getProductsSuccess(data));
  } catch (error) {
    console.log('saga', error);
  }
}

function* createProduct(action) {
  try {
    const response = yield call(productsApi.create, action.payload);
    console.log('saga response', response);
  } catch (error) {
    console.log('saga error', error);
  }
}

function* watchProductsRequest() {
  yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts);
  yield takeLatest(CREATE_PRODUCT_REQUEST, createProduct);
}

export default watchProductsRequest;
