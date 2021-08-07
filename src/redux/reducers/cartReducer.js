import {
  ADD_CART,
  DELETE_CART,
  SET_QUANTITY,
  DELETE_ALL_CART,
} from '../actions/cartAction';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  const preProducts = JSON.parse(JSON.stringify(state.products));
  switch (action.type) {
    case ADD_CART: {
      const {product, quantity} = action.payload;
      const index = preProducts.findIndex(({data}) => {
        return data.id === product.id;
      });
      if (index <= -1) {
        return {
          totalPrice:
            state.totalPrice +
            parseFloat(product.price) * parseFloat(quantity || 1),
          totalQuantity: state.totalQuantity + 1,
          products: [
            ...preProducts,
            {
              data: product,
              quantity: quantity || 1,
            },
          ],
        };
      }
      preProducts[index].quantity += quantity || 1;
      return {
        ...state,
        totalPrice: state.totalPrice + parseFloat(product.price),
        products: [...preProducts],
      };
    }

    case DELETE_CART: {
      const productId = action.payload;
      const index = preProducts.findIndex(item => item.data.id === productId);
      if (index <= -1) {
        return state;
      }
      const productPrice = preProducts[index].data.price;
      const productQuantity = preProducts[index].quantity;
      preProducts.splice(index, 1);
      return {
        totalPrice:
          state.totalPrice - parseFloat(productPrice) * productQuantity,
        totalQuantity: state.totalQuantity - 1,
        products: [...preProducts],
      };
    }

    case SET_QUANTITY: {
      const {productId, quantity} = action.payload;
      let newTotalPrice = 0;
      const index = preProducts.findIndex(item => {
        return item.data.id === productId;
      });
      preProducts[index].quantity = quantity;
      preProducts.forEach(item => {
        newTotalPrice += parseFloat(item.data.price) * item.quantity;
      });
      return {
        ...state,
        totalPrice: newTotalPrice,
        products: [...preProducts],
      };
    }

    case DELETE_ALL_CART: {
      return {
        products: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
