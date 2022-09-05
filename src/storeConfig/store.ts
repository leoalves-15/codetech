import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  cart: function (state, action) {
    return [{id: 1, qtd: 2}];
  },
});

function store() {
  return createStore(reducers);
}

export default store;
