export const STORE_ACTIONS = {
  LOGIN: "login",
};

export function loginAction(user) {
  return {
    type: STORE_ACTIONS.LOGIN,
    payload: user,
  };
}
