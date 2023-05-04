import CreateUserPage from "../pages/admin/users/CreateUserPage";
import ListUsersPage from "../pages/admin/users/ListUsersPage";
import UpdateUserPage from "../pages/admin/users/UpdateUserPage";

const adminRoutes = [
  {
    path: "/users",
    element: <ListUsersPage />,
  },
  {
    path: "/users/update/:id",
    element: <UpdateUserPage />,
  },
  {
    path: "/users/create",
    element: <CreateUserPage />,
  },
];

export default adminRoutes;
