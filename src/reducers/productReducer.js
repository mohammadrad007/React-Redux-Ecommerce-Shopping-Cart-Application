import {
  FETCH_PRODUCTS,
  ORDER_PRDUCTS_BY_PRICE,
  FILTER_PRODUCTS_BYSIZE
} from "../actions/types";

const initialState = {
  items: [],
  filtredItems: [],
  size: "",
  sort: ""
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filtredItems: action.payload
      };
    case FILTER_PRODUCTS_BYSIZE:
      return {
        ...state,
        filtredItems: action.payload.items,
        size: action.payload.size
      };
    case ORDER_PRDUCTS_BY_PRICE:
      return {
        ...state,
        filtredItems: action.payload.items,
        sort: action.payload.sort
      };

    default:
      console.log(state.filtredItems);
      return state;
  }
}
