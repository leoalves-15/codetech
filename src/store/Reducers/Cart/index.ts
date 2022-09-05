import addCart from "../../Actions/addCart";
let cart = JSON.parse(localStorage.getItem('cart') || '');

const initial_value = cart || [{}];

export default function reducer(state = initial_value, action) {
  if (action.type === "ADD_PRODUCT") {
    let newCart = [...state, action.product]
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  }
  return state;
}
