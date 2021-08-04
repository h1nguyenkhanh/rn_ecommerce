export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCTS_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCTS_FAIL';

export const getProductsRequest = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

export const getProductsSuccess = productsData => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: productsData,
  };
};

export const getProductsFail = error => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: error,
  };
};

export const createProductRequest = productData => {
  return {
    type: CREATE_PRODUCT_REQUEST,
    payload: productData,
  };
};

export const createProductSuccess = () => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
  };
};

export const createProductFail = error => {
  return {
    type: CREATE_PRODUCT_FAIL,
    payload: error,
  };
};
