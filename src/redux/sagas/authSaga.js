import {delay, join, put, spawn, takeLatest} from 'redux-saga/effects';
import {
  signinFail,
  signinSuccess,
  SIGNIN_REQUEST,
  signupFail,
  signupSuccess,
  SIGNUP_REQUEST,
} from 'redux/actions/authAction';
import authApi from './../../apis/authApi';
import {deleteAllCart} from 'redux/actions/cartAction';

function* sendSignupRequest({payload}) {
  try {
    const sendTask = yield spawn(authApi.signup, payload);
    yield delay(700);
    const user = yield join(sendTask);
    yield put(signupSuccess(user));
    yield put(deleteAllCart());
  } catch (error) {
    yield put(signupFail(error));
  }
}

function* sendSigninRequest({payload: {email, password}}) {
  try {
    const sendTask = yield spawn(authApi.signin, email, password);
    yield delay(700);
    const user = yield join(sendTask);
    if (user?.status === 'locked') {
      throw new Error('account is locked');
    }
    yield put(signinSuccess(user));
    yield put(deleteAllCart());
    if (user.role === 'admin') {
    } else {
    }
  } catch (error) {
    yield put(signinFail(error));
  }
}

function* watchAuthRequest() {
  yield takeLatest(SIGNUP_REQUEST, sendSignupRequest);
  yield takeLatest(SIGNIN_REQUEST, sendSigninRequest);
}

export default watchAuthRequest;
