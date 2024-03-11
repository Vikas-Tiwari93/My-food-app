export const getAuthTokenkey = () => {
  return localStorage.getItem("authToken");
};
export const getRefreshTokenkey = () => {
  return localStorage.getItem("refreshToken");
};
export const setTokenkeys = (refreshToken: string, authToken: string) => {
  localStorage.setItem("authToken", `Bearer ${authToken}`);
  localStorage.setItem("refreshToken", `${refreshToken}`);
};
export const removeTokenKeys = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
};
export const setAuthTokenkey = (authToken: string) => {
  localStorage.setItem("authToken", `Bearer${authToken}`);
};

export const getUsenameAndPasswordBase64 = () => {
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");

  const authString = `${username}:${password}`;
  const encodedAuth = btoa(authString);
  return `Basic ${encodedAuth}`;
};
