import Router from "./routes";
import StoreProvider from "./store/storeProvider";

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;
