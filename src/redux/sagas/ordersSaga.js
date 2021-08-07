
import {delay, join, put, spawn, takeLatest} from 'redux-saga/effects';
import {
  createOrderFail,
  createOrderSuccess,
  CREATE_ORDER_REQUEST,
  getAllOrdersFail,
  getAllOrdersSuccess,
  getUserOrdersFail,
  getUserOrdersSuccess,
  GET_ALL_ORDERS_REQUEST,
  GET_USER_ORDERS_REQUEST,
  removeOrderFail,
  removeOrderSuccess,
  REMOVE_ORDER_REQUEST,
  updateOrderFail,
  updateOrderSuccess,
  UPDATE_ORDER_REQUEST,
} from 'redux/actions/ordersAction';
import ordersApi from 'apis/ordersApi';
import {deleteAllCart} from 'redux/actions/cartAction';

function* createOrder(action) {
  try {
    const createTask = yield spawn(ordersApi.create, action.payload);
    yield delay(700);
    const response = yield join(createTask);
    yield put(createOrderSuccess());
    yield put(deleteAllCart());
  } catch (error) {
    yield put(createOrderFail(error));
  }
}

function* fetchUserOrders(action) {
  try {
    const fetchTask = yield spawn(ordersApi.getUserOrders, action.payload);
    yield delay(700);
    const response = yield join(fetchTask);
    yield put(getUserOrdersSuccess(response));
  } catch (error) {
    yield put(getUserOrdersFail(error));
  }
}

function* removeOrders(action) {
  try {
    const removeTask = yield spawn(ordersApi.remove, action.payload);
    yield delay(700);
    yield join(removeTask);
    yield put(removeOrderSuccess());
  } catch (error) {
    yield put(removeOrderFail(error));
  }
}

function* updateOrder(action) {
  try {
    const updateTask = yield spawn(ordersApi.update, action.payload);
    yield delay(700);
    yield join(updateTask);
    yield put(updateOrderSuccess());
  } catch (error) {
    yield put(updateOrderFail(error));
  }
}

function* fetchAllOrders() {
  try {
    const fetchTask = yield spawn(ordersApi.getAll);
    yield delay(700);
    const response = yield join(fetchTask);
    yield put(getAllOrdersSuccess(response));
  } catch (error) {
    yield put(getAllOrdersFail(error));
  }
}

function* watchOrdersRequest() {
  yield takeLatest(CREATE_ORDER_REQUEST, createOrder);
  yield takeLatest(GET_USER_ORDERS_REQUEST, fetchUserOrders);
  yield takeLatest(REMOVE_ORDER_REQUEST, removeOrders);
  yield takeLatest(UPDATE_ORDER_REQUEST, updateOrder);
  yield takeLatest(GET_ALL_ORDERS_REQUEST, fetchAllOrders);
}

export default watchOrdersRequest;
