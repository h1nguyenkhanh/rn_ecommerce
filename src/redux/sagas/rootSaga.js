import {spawn} from 'redux-saga/effects';

import categoriesSaga from './categoriesSaga';
import productsSaga from './productsSaga';

function* rootSaga() {
  yield spawn(categoriesSaga);
  yield spawn(productsSaga);
}

export default rootSaga;
