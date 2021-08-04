import {call, put, select, takeLatest} from 'redux-saga/effects';
import {
  GET_CATEGORIES_REQUEST,
  getCategoriesSuccess,
} from '../actions/categoriesAction';
import categoriesApi from './../../apis/categoriesApi';

function* fetchCategories() {
  try {
    const data = yield call(categoriesApi.get);
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    console.log('saga', error);
  }
}

function* watchProductsRequest() {
  yield takeLatest(GET_CATEGORIES_REQUEST, fetchCategories);
}

export default watchProductsRequest;
