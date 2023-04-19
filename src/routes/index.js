import React from "react";
import { RouterProvider } from "react-router-dom";
import { useStore } from "../store/storeContext";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

export default function Router() {
  const {
    computed: { isAuthenticated },
  } = useStore();

  return (
    <RouterProvider router={isAuthenticated ? privateRoutes : publicRoutes} />
  );
}
