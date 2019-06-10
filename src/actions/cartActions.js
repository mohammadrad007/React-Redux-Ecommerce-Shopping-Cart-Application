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
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({
    type: ADD_TO_CART,
    payload: cartItems
  });
};
export const removeFromCart = (items, product) => dispatch => {
  const cartItem = items.slice().filter(elm => elm.id !== product.id);
  // localStorage.setItem("cartItems", cartItems);
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItem
  });
};
