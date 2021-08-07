import {call, put, select, takeLatest} from 'redux-saga/effects';
import {
  GET_CATEGORIES_REQUEST,
  getCategoriesSuccess,
  getCategoriesFail,
} from '../actions/categoriesAction';
import categoriesApi from './../../apis/categoriesApi';

function* fetchCategories() {
  try {
    const data = yield call(categoriesApi.get);
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    yield put(getCategoriesFail(error));
  }
}

function* watchCategoriesRequest() {
  yield takeLatest(GET_CATEGORIES_REQUEST, fetchCategories);
}

export default watchCategoriesRequest;
