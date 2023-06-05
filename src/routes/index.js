import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useStore } from "../store/storeContext";
import adminRoutes from "./adminRoutes";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

export const getRoutesByUserRole = (role) => {
	if (role === "admin") {
		return [...adminRoutes, ...privateRoutes];
	} else if (role === "developer") {
		return privateRoutes;
	}
};

export default function Router() {
	const {
		computed: { isAuthenticated },
		state: { user },
	} = useStore();
	return (
		<RouterProvider
			router={createBrowserRouter(
				isAuthenticated ? getRoutesByUserRole(user.role) : publicRoutes
			)}
		/>
	);
}
