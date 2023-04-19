import { createBrowserRouter } from "react-router-dom";
import RouterRedirect from "../components/utilities/routerRedirect";
import HomePage from "../pages/homePage";

const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <RouterRedirect to="/" />,
  },
]);

export default privateRoutes;
