import RouterRedirect from "../components/utilities/routerRedirect";
import LoginPage from "../pages/loginPage";

const publicRoutes = [
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
];

export default publicRoutes;
