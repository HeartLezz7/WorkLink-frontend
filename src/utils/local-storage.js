const ACCESS_TOKEN = "ACCESS_TOKEN";

export const createAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const deleteAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
