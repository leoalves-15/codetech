import addCart from "../../Actions/addCart";
import {AddCart} from "./type"
let cart = JSON.parse(localStorage.getItem('cart') || '{}');

const initial_value = cart || [{}];

export default function reducer(state = initial_value, action: AddCart) {
  if (action.type === "ADD_PRODUCT") {
    let newCart = [...state]

    const productInCartIndex = newCart.findIndex(item =>
      item.id === action.product.id
    );

    if (productInCartIndex >= 0) {
      newCart[productInCartIndex].qtd++;
    } else {
      newCart.push(
          action.product
      )
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  }
  return state;
}
