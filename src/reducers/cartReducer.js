import { REMOVE_FROM_CART, ADD_TO_CART } from "../actions/types";

const initialState = {
  items: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: action.payload
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
