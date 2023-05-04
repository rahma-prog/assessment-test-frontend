import networkService from "./networkService";

const usersService = {
  //   async login({ email, password }) {
  //     const response = await networkService.sendHttpRequest({
  //       url: "/auth/sign-in",
  //       method: "POST",
  //       body: { email, password },
  //     });

  //     localStorage.setItem("token", response.accessToken);
  //     return response.user;
  //   },

  async getAll() {
    const response = await networkService.sendHttpRequest({
      url: "/users",
      method: "GET",
    });
    return response;
  },
};

export default usersService;
