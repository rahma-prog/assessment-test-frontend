import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default privateRoutes;
