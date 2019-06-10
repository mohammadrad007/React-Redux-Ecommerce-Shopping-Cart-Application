import { FETCH_PRODUCTS } from "../actions/types";
import { FILTER_PRODUCTS_BYSIZE } from "../actions/types";

const initialState = {
  items: [],
  filtredItems: [],
  size: ""
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
    case FILTER_PRODUCTS_BYSIZE:
      return {
        ...state,
        filtredItems: action.payload.items,
        size: action.payload.size
      };
    default:
      return state;
  }
}
