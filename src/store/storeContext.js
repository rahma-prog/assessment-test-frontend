import { createContext, useContext } from "react";

const storeContext = createContext({});

export default storeContext;

export const useStore = () => useContext(storeContext);
