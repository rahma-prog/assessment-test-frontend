import networkService from "./networkService";

const authService = {
  async login({ email, password }) {
    const response = await networkService.sendHttpRequest({
      url: "/auth/sign-in",
      method: "POST",
      body: { email, password },
    });

    localStorage.setItem("token", response.accessToken);
    return response.user;
  },

  async getAuthUser() {
    const response = await networkService.sendHttpRequest({
      url: "/auth",
      method: "GET",
    });
    return response;
  },
};

export default authService;
