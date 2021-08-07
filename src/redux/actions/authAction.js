export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const SIGNOUT_REQUEST = "SIGNOUT_REQUEST";

export const signinRequest = (email, password) => {
    return {
        type: SIGNIN_REQUEST,
        payload: {
            email,
            password,
        },
    };
};

export const signinSuccess = (user) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: user,
    };
};

export const signinFail = (error) => {
    return {
        type: SIGNIN_FAIL,
        payload: error,
    };
};

export const signupRequest = (userInfo) => {
    return {
        type: SIGNUP_REQUEST,
        payload: userInfo,
    };
};

export const signupSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user,
    };
};

export const signupFail = (error) => {
    return {
        type: SIGNUP_FAIL,
        payload: error,
    };
};

export const signoutRequest = () => {
    return {
        type: SIGNOUT_REQUEST,
    };
};
