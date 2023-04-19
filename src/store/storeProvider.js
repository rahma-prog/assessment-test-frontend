import { useReducer } from "react";
import storeContext from "./storeContext";
import storeReducer, { storeInitialState } from "./storeReducer";

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, storeInitialState);

  const values = {
    state,
    computed: {
      isAuthenticated: !!state.user,
    },
    dispatch,
  };

  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
}

export default StoreProvider;
