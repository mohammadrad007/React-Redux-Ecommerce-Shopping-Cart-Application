import { REMOVE_FROM_CART, ADD_TO_CART } from "./types";

export const addToCart = (items, product) => dispatch => {
  const cartItems = items.slice();

  let productAlredyInCart = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      productAlredyInCart = true;
      item.count++;
    }
  });
  if (!productAlredyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({
    type: ADD_TO_CART,
    payload: cartItems
  });
};
