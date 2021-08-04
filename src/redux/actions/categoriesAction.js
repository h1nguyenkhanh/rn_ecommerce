export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

export const getCategoriesRequest = () => {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
};

export const getCategoriesSuccess = categoriesData => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categoriesData,
  };
};

export const getCategoriesFail = error => {
  return {
    type: GET_CATEGORIES_FAIL,
    payload: error,
  };
};
