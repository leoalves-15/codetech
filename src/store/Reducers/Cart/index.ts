import addCart from "../../Actions/addCart";
import { AddCart, Product } from "./type";
let icart = JSON.parse(localStorage.getItem("cart") || "[]");

const initial_value = icart || [];

export default function reducer(state = initial_value, action: AddCart) {
  if (action.type === "ADD_PRODUCT") {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.clear();
    let newCart = cart;

    const productInCartIndex = newCart.findIndex((item: Product) =>
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

    return state;
  }
  return state;
}
