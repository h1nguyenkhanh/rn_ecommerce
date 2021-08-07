import usersApi from 'apis/usersApi';
import {delay, join, put, spawn, takeLatest} from 'redux-saga/effects';
import {signinSuccess} from 'redux/actions/authAction';
import {
  getAllUsersFail,
  getAllUsersSuccess,
  getOneUserFail,
  getOneUserSuccess,
  GET_ALL_USERS_REQUEST,
  GET_ONE_USER_REQUEST,
  updateUserFail,
  updateUserFieldFail,
  updateUserFieldSuccess,
  updateUserSuccess,
  UPDATE_USER_FIELD_REQUEST,
  UPDATE_USER_REQUEST,
} from 'redux/actions/usersAction';
import {HIDE_PROFILE_MODAL} from 'redux/actions/modalAction';

function* fetchOneUser(action) {
  try {
    const fetchTask = yield spawn(usersApi.get, action.payload);
    yield delay(700);
    const response = yield join(fetchTask);
    yield put(getOneUserSuccess(response));
  } catch (error) {
    yield put(getOneUserFail(error));
  }
}

function* updateUser(action) {
  try {
    const updateTask = yield spawn(usersApi.update, action.payload);
    yield delay(700);
    const response = yield join(updateTask);
    yield put(updateUserSuccess(response));
    yield put(signinSuccess(response));
    yield put({type: HIDE_PROFILE_MODAL});
  } catch (error) {
    yield put(updateUserFail(error));
  }
}

function* fetchAllUsers() {
  try {
    const fetchTask = yield spawn(usersApi.getAll);
    yield delay(700);
    const response = yield join(fetchTask);
    yield put(getAllUsersSuccess(response));
  } catch (error) {
    yield put(getAllUsersFail(error));
  }
}

function* updateUserField(action) {
  const {message} = action.payload;
  try {
    const updateTask = yield spawn(usersApi.updateField, action.payload);
    yield delay(700);
    const response = yield join(updateTask);
    yield put(updateUserFieldSuccess(response));
  } catch (error) {
    yield put(updateUserFieldFail(error));
  }
}

function* watchUsersRequest() {
  yield takeLatest(GET_ONE_USER_REQUEST, fetchOneUser);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(GET_ALL_USERS_REQUEST, fetchAllUsers);
  yield takeLatest(UPDATE_USER_FIELD_REQUEST, updateUserField);
}

export default watchUsersRequest;
