import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes";
import StoreProvider from "./store/storeProvider";

function App() {
  return (
    <StoreProvider>
      <ToastContainer />
      <Router />
    </StoreProvider>
  );
}

export default App;
