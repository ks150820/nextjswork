import CartReducer from "../redux/reducers/Cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: CartReducer,
});

export default rootReducer;
