import { FETCH_PRODUCTS } from "./types";
import { FILTER_PRODUCTS_BYSIZE } from "./types";

export const fetchProducts = () => dispatch => {
  fetch(`http://localhost:8000/products`)
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};
export const filterProducts = (products, size) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BYSIZE,
    payload: {
      size: size,

      items:
        size === ""
          ? products
          : products.filter(
              a => a.availabelSizes.indexOf(size.toUpperCase) >= 0
            )
    }
  });
};
