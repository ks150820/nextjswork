export const ADD_CART = "ADD_CART";

export const cartAction = (data) => async (dispatch) => {
  //console.log(props)
  dispatch({
    type: ADD_CART,
    cartData: data,
  });
};
