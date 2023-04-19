import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage";

const publicRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default publicRoutes;
