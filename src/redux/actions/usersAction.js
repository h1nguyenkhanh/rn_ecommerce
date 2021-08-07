export const GET_ONE_USER_REQUEST = "GET_ONE_USER_REQUEST";
export const GET_ONE_USER_SUCCESS = "GET_ONE_USER_SUCCESS";
export const GET_ONE_USER_FAIL = "GET_ONE_USER_FAIL";

export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const UPDATE_USER_FIELD_REQUEST = "UPDATE_USER_FIELD_REQUEST";
export const UPDATE_USER_FIELD_SUCCESS = "UPDATE_USER_FIELD_SUCCESS";
export const UPDATE_USER_FIELD_FAIL = "UPDATE_USER_FIELD_FAIL";

export const getOneUserRequest = () => {
    return {
        type: GET_ONE_USER_REQUEST,
    };
};

export const getOneUserSuccess = (userData) => {
    return {
        type: GET_ONE_USER_SUCCESS,
        payload: userData,
    };
};

export const getOneUserFail = (error) => {
    return {
        type: GET_ONE_USER_FAIL,
        payload: error,
    };
};

export const updateUserRequest = (userData) => {
    return {
        type: UPDATE_USER_REQUEST,
        payload: userData,
    };
};

export const updateUserSuccess = () => {
    return {
        type: UPDATE_USER_SUCCESS,
    };
};

export const updateUserFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        payload: error,
    };
};

export const getAllUsersRequest = () => {
    return {
        type: GET_ALL_USERS_REQUEST,
    };
};

export const getAllUsersSuccess = (usersData) => {
    return {
        type: GET_ALL_USERS_SUCCESS,
        payload: usersData,
    };
};

export const getAllUsersFail = (error) => {
    return {
        type: GET_ALL_USERS_FAIL,
        payload: error,
    };
};

export const updateUserFieldRequest = (userData) => {
    return {
        type: UPDATE_USER_FIELD_REQUEST,
        payload: userData,
    };
};

export const updateUserFieldSuccess = () => {
    return {
        type: UPDATE_USER_FIELD_SUCCESS,
    };
};

export const updateUserFieldFail = (error) => {
    return {
        type: UPDATE_USER_FIELD_FAIL,
        payload: error,
    };
};
