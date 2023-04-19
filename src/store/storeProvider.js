import { useEffect, useReducer } from "react";
import authService from "../services/authService";
import networkService from "../services/networkService";
import { loginAction } from "./storeActions";
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

  useEffect(() => {
    if (networkService.isAuthenticated()) {
      authService.getAuthUser().then((user) => {
        dispatch(loginAction(user));
      });
    }
  }, []);

  return (
    <storeContext.Provider value={values}>{children}</storeContext.Provider>
  );
}

export default StoreProvider;
