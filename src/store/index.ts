import { createStore, combineReducers } from "redux";
import cart from "./Reducers/Cart";

const reducers = combineReducers({
  cart
});

function store() {
  return createStore(reducers);
}

export default store;
