import networkService from "./networkService";

const usersService = {
	// async login({ email, password }) {
	// 	const response = await networkService.sendHttpRequest({
	// 		url: "/auth/sign-in",
	// 		method: "POST",
	// 		body: { email, password },
	// 	});

	// 	localStorage.setItem("token", response.accessToken);
	// 	return response.user;
	// },

	async getAll() {
		const response = await networkService.sendHttpRequest({
			url: "/users",
			method: "GET",
		});
		return response;
	},
	async getById(id) {
		const response = await networkService.sendHttpRequest({
			url: "/users/" + id,
			method: "GET",
		});
		return response;
	},
	async createUser(user) {
		const response = await networkService.sendHttpRequest({
			url: "/users",
			method: "POST",
			body: user,
		});
		return response;
	},

	async deleteUser(id) {
		const response = await networkService.sendHttpRequest({
			url: "/users/" + id,
			method: "DELETE",
		});
		return response;
	},
	async updateUser(userId, user) {
		const response = await networkService.sendHttpRequest({
			url: `/users/${userId}`,
			method: "PUT",
			body: user,
		});
		return response;
	},
};

export default usersService;
