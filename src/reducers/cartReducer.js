import { REMOVE_FROM_CART, ADD_TO_CART } from "../actions/types";

const initialState = {
  items: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: action.payload
      };

    case REMOVE_FROM_CART:
      return {
        items: action.payload
      };
    default:
      console.log(state.items);
      return state;
  }
}
