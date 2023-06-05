import CreateUserPage from "../pages/admin/users/CreateUserPage";
import DashboardPage from "../pages/admin/users/Dashboard";
import ListUsersPage from "../pages/admin/users/ListUsersPage";
import UpdateUserPage from "../pages/admin/users/UpdateUserPage";
import HomePage from "../pages/homePage";

const adminRoutes = [
	{
		path: "/",
		element: <HomePage />,
		children: [
			{
				path: "/",
				element: <DashboardPage />,
			},
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
		],
	},
];

export default adminRoutes;
