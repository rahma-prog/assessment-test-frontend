import { useEffect, useReducer, useState } from "react";
import authService from "../services/authService";
import networkService from "../services/networkService";
import { loginAction } from "./storeActions";
import storeContext from "./storeContext";
import storeReducer, { storeInitialState } from "./storeReducer";
import HomePage from "../pages/homePage";

function StoreProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [state, dispatch] = useReducer(storeReducer, storeInitialState);

	const values = {
		state,
		computed: {
			isAuthenticated: !!state.user,
		},
		dispatch,
	};

	useEffect(() => {
		if (networkService.isAuthenticated()) {
			setIsLoading(true);
			authService
				.getAuthUser()
				.then((user) => {
					dispatch(loginAction(user));
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
		}
	}, []);

	return (
		<storeContext.Provider value={values}>
			{isLoading ? null : children}
		</storeContext.Provider>
	);
}

export default StoreProvider;
