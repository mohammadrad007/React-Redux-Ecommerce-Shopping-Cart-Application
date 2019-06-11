import {
  FETCH_PRODUCTS,
  ORDER_PRDUCTS_BY_PRICE,
  FILTER_PRODUCTS_BYSIZE
} from "./types";

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
              a => a.availableSizes.indexOf(size.toUpperCase()) >= 0
            )
    }
  });
};

export const sortProducts = (items, sort) => dispatch => {
  const products = items.slice();
  // برای ریختن ارایه ی قبلی تو این ک در اورد پدر منو
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id < b.id ? 1 : -1));
  }
  // console.log(products);

  return dispatch({
    type: ORDER_PRDUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products
    }
  });
};
