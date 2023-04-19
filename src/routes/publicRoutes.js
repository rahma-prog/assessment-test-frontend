import { createBrowserRouter } from "react-router-dom";
import RouterRedirect from "../components/utilities/routerRedirect";
import LoginPage from "../pages/loginPage";

const publicRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: (
      <RouterRedirect to={"/login"} message="This page doesn't exists" />
    ),
  },
]);

export default publicRoutes;
