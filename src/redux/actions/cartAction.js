export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const DELETE_ALL_CART = "DELETE_ALL_CART";
export const SET_QUANTITY = "SET_QUANTITY";

export const addCart = (product, quantity) => {
    return {
        type: ADD_CART,
        payload: {
            product,
            quantity,
        },
    };
};

export const deleteCart = (productId) => {
    return {
        type: DELETE_CART,
        payload: productId,
    };
};

export const deleteAllCart = () => {
    return {
        type: DELETE_ALL_CART,
    };
};

export const setQuantity = (productId, quantity) => {
    return {
        type: SET_QUANTITY,
        payload: {
            productId,
            quantity,
        },
    };
};
