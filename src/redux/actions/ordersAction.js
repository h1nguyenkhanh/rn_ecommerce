export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";

export const GET_USER_ORDERS_REQUEST = "GET_USER_ORDER_REQUEST";
export const GET_USER_ORDERS_SUCCESS = "GET_USER_ORDER_SUCCESS";
export const GET_USER_ORDERS_FAIL = "GET_USER_ORDER_FAIL";

export const REMOVE_ORDER_REQUEST = "REMOVE_ORDER_REQUEST";
export const REMOVE_ORDER_SUCCESS = "REMOVE_ORDER_SUCCESS";
export const REMOVE_ORDER_FAIL = "REMOVE_ORDER_FAIL";

export const UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST";
export const UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS";
export const UPDATE_ORDER_FAIL = "UPDATE_ORDER_FAIL";

export const GET_ALL_ORDERS_REQUEST = "GET_ALL_ORDERS_REQUEST";
export const GET_ALL_ORDERS_SUCCESS = "GET_ALL_ORDERS_SUCCESS";
export const GET_ALL_ORDERS_FAIL = "GET_ALL_ORDERS_FAIL";


export const createOrderRequest = (orderData) => {
    return {
        type: CREATE_ORDER_REQUEST,
        payload: orderData,
    };
};

export const createOrderSuccess = () => {
    return {
        type: CREATE_ORDER_SUCCESS,
    };
};

export const createOrderFail = (error) => {
    return {
        type: CREATE_ORDER_FAIL,
        payload: error,
    };
};

export const getUserOrdersRequest = (userId) => {
    return {
        type: GET_USER_ORDERS_REQUEST,
        payload: userId,
    };
};

export const getUserOrdersSuccess = (ordersData) => {
    return {
        type: GET_USER_ORDERS_SUCCESS,
        payload: ordersData,
    };
};

export const getUserOrdersFail = (error) => {
    return {
        type: GET_USER_ORDERS_FAIL,
        payload: error,
    };
};

export const removeOrderRequest = (orderId) => {
    return {
        type: REMOVE_ORDER_REQUEST,
        payload: orderId
    };
};

export const removeOrderSuccess = () => {
    return {
        type: REMOVE_ORDER_SUCCESS
    }
};

export const removeOrderFail = (error) => {
    return {
        type: REMOVE_ORDER_FAIL,
        payload: error
    };
};

export const updateOrderRequest = (orderData) => {
    return {
        type: UPDATE_ORDER_REQUEST,
        payload: orderData
    }
}
export const updateOrderSuccess = () => {
    return {
        type: UPDATE_ORDER_SUCCESS,
    }
}
export const updateOrderFail = (error) => {
    return {
        type: UPDATE_ORDER_FAIL,
        payload: error
    }
}
export const getAllOrdersRequest = () => {
    return {
        type: GET_ALL_ORDERS_REQUEST
    }
}
export const getAllOrdersSuccess = (ordersData) => {
    return {
        type: GET_ALL_ORDERS_SUCCESS,
        payload: ordersData
    }
}
export const getAllOrdersFail = (error) => {
    return {
        type: GET_ALL_ORDERS_FAIL,
        payload: error
    }
}