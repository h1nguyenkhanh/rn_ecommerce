import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';
import authReducer from './authReducer';
import filtersReducer from './filtersReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ordersReducer from './ordersReducer';
import modalsReducer from './modalsReducer';
import usersReducer from './usersReducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['signinError', 'signupError'],
};

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  address: addressReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  filters: filtersReducer,
  orders: ordersReducer,
  modals: modalsReducer,
  users: usersReducer,
});
