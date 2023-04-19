import { STORE_ACTIONS } from "./storeActions";

export const storeInitialState = {
  user: null,
};

function storeReducer(state, action) {
  switch (action.type) {
    case STORE_ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default storeReducer;
