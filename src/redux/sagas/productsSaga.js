import {delay, join, put, spawn, takeLatest, call} from 'redux-saga/effects';
import productsApi from './../../apis/productsApi';
import {
  createProductFail,
  createProductSuccess,
  CREATE_PRODUCT_REQUEST,
  deleteProductFail,
  deleteProductSuccess,
  DELETE_PRODUCT_REQUEST,
  getOneProductFail,
  getOneProductSuccess,
  getProductsFail,
  getProductsRequest,
  getProductsSuccess,
  GET_ONE_PRODUCT_REQUEST,
  GET_PRODUCTS_FILTERS_REQUEST,
  GET_PRODUCTS_REQUEST,
  searchProductsFail,
  searchProductsSuccess,
  SEARCH_PRODUCTS_REQUEST,
  sendCommentFail,
  sendCommentSuccess,
  SEND_COMMENT_REQUEST,
  updateProductFail,
  updateProductSuccess,
  UPDATE_PRODUCT_REQUEST,
} from '../actions/productsAction';

function* fetchOneProduct(action) {
  try {
    const fetchTask = yield spawn(productsApi.get, action.payload);
    const response = yield join(fetchTask);
    yield put(getOneProductSuccess(response));
  } catch (error) {
    yield put(getOneProductFail(error));
  }
}

function* fetchProducts() {
  try {
    const fetchTask = yield spawn(productsApi.getAll);
    yield delay(700);
    const response = yield join(fetchTask);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}

function* createProduct(action) {
  try {
    const createTask = yield spawn(productsApi.create, action.payload);
    yield delay(700);
    const response = yield join(createTask);
    yield put(createProductSuccess(response));
    yield put(getProductsRequest());
  } catch (error) {
    yield put(createProductFail(error));
  }
}

function* updateProduct(action) {
  try {
    const updateTask = yield spawn(productsApi.update, action.payload);
    yield delay(700);
    const response = yield join(updateTask);
    yield put(updateProductSuccess(response));
    yield put(getProductsRequest());
  } catch (error) {
    yield put(updateProductFail(error));
  }
}

function* deleteProduct(action) {
  try {
    yield call(productsApi.remove, action.payload);
    yield put(deleteProductSuccess());
    yield put(getProductsRequest());
  } catch (error) {
    yield put(deleteProductFail(error));
  }
}

function* searchProduct(action) {
  try {
    const searchTask = yield spawn(productsApi.search, action.payload);
    yield delay(700);
    const response = yield join(searchTask);
    yield put(searchProductsSuccess(response));
  } catch (error) {
    yield put(searchProductsFail(error));
  }
}
function* fetchProductsFilters(action) {
  try {
    const fetchTask = yield spawn(productsApi.getWithFilters, action.payload);
    yield delay(500);
    const response = yield join(fetchTask);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}

function* sendComment(action) {
  try {
    const sendTask = yield spawn(productsApi.comment, action.payload);
    yield delay(500);
    const response = yield join(sendTask);
    yield put(sendCommentSuccess(response));
  } catch (error) {
    yield put(sendCommentFail(error));
  }
}

function* watchProductsRequest() {
  yield takeLatest(GET_ONE_PRODUCT_REQUEST, fetchOneProduct);
  yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts);
  yield takeLatest(CREATE_PRODUCT_REQUEST, createProduct);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProduct);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
  yield takeLatest(SEARCH_PRODUCTS_REQUEST, searchProduct);
  yield takeLatest(GET_PRODUCTS_FILTERS_REQUEST, fetchProductsFilters);
  yield takeLatest(SEND_COMMENT_REQUEST, sendComment);
}

export default watchProductsRequest;
