import RouterRedirect from "../components/utilities/routerRedirect";

const privateRoutes = [
	{
		path: "*",
		element: <RouterRedirect to="/" />,
	},
];

export default privateRoutes;
