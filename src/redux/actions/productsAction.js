export const GET_ONE_PRODUCT_REQUEST = 'GET_ONE_PRODUCT_REQUEST';
export const GET_ONE_PRODUCT_SUCCESS = 'GET_ONE_PRODUCT_SUCCESS';
export const GET_ONE_PRODUCT_FAIL = 'GET_ONE_PRODUCT_FAIL';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCTS_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCTS_FAIL';

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

export const SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAIL = 'SEARCH_PRODUCTS_FAIL';

export const GET_PRODUCTS_FILTERS_REQUEST = 'GET_PRODUCTS_FILTERS_REQUEST';

export const SEND_COMMENT_REQUEST = 'SEND_COMMENT_REQUEST';
export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS';
export const SEND_COMMENT_FAIL = 'SEND_COMMENT_FAIL';

export const getOneProductRequest = productId => {
  return {
    type: GET_ONE_PRODUCT_REQUEST,
    payload: productId,
  };
};

export const getOneProductSuccess = productData => {
  return {
    type: GET_ONE_PRODUCT_SUCCESS,
    payload: productData,
  };
};

export const getOneProductFail = error => {
  return {
    type: GET_ONE_PRODUCT_FAIL,
    payload: error,
  };
};

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

export const updateProductRequest = productData => {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload: productData,
  };
};

export const updateProductSuccess = () => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
  };
};

export const updateProductFail = error => {
  return {
    type: UPDATE_PRODUCT_FAIL,
    payload: error,
  };
};

export const deleteProductRequest = productId => {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: productId,
  };
};

export const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  };
};

export const deleteProductFail = error => {
  return {
    type: DELETE_PRODUCT_FAIL,
    payload: error,
  };
};

export const searchProductsRequest = keywords => {
  return {
    type: SEARCH_PRODUCTS_REQUEST,
    payload: keywords,
  };
};

export const searchProductsSuccess = productsData => {
  return {
    type: SEARCH_PRODUCTS_SUCCESS,
    payload: productsData,
  };
};

export const searchProductsFail = error => {
  return {
    type: SEARCH_PRODUCTS_FAIL,
    payload: error,
  };
};

export const getProductsFiltersRequest = filters => {
  return {
    type: GET_PRODUCTS_FILTERS_REQUEST,
    payload: filters,
  };
};

export const sendCommentRequest = commentData => {
  return {
    type: SEND_COMMENT_REQUEST,
    payload: commentData,
  };
};

export const sendCommentSuccess = () => {
  return {
    type: SEND_COMMENT_SUCCESS,
  };
};

export const sendCommentFail = error => {
  return {
    type: SEND_COMMENT_FAIL,
    payload: error,
  };
};
