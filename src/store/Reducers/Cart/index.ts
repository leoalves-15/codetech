import addCart from '../../Actions/addCart';

const initial_value = [{ id: 1, qtd: 2 }];
export default function reducer(state = initial_value, action) {
  if(action.type === "ADD_PRODUCT"){
    return [...state, action.product];
  }
  return state;
}