import { ADD_CART } from "../actions/Cart";

const initialState = {
  cartNumber: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const dataState = [...state.cartNumber, action.cartData];
      return { ...state, cartNumber: dataState };
    default:
      return state;
  }
};

export default CartReducer;
