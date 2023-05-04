import RouterRedirect from "../components/utilities/routerRedirect";
import HomePage from "../pages/homePage";

const privateRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <RouterRedirect to="/" />,
  },
];

export default privateRoutes;
