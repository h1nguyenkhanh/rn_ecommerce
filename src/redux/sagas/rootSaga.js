import {spawn} from 'redux-saga/effects';

import categoriesSaga from './categoriesSaga';
import productsSaga from './productsSaga';
import addressSaga from './addressSaga';
import authSaga from './authSaga';
import ordersSaga from './ordersSaga';
import usersSaga from './usersSaga';

function* rootSaga() {
  yield spawn(categoriesSaga);
  yield spawn(productsSaga);
  yield spawn(addressSaga);
  yield spawn(authSaga);
  yield spawn(ordersSaga);
  yield spawn(usersSaga);
}

export default rootSaga;
