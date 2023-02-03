import Cookies from 'js-cookie';

const TOKEN_KEY = 'cap_token';

const REFRESH_TOKEN_KEY = 'cap_refresh_token';

export const setToken = (token: string, expire: number) => {
  const expireTime = new Date(new Date().getTime() + expire * 1000);
  Cookies.set(TOKEN_KEY, token, { expires: expireTime });
};

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) return token;
  return false;
};

export const delToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const setRefreshToken = (token: string, expire: number) => {
  const expireTime = new Date(new Date().getTime() + expire * 1000);
  Cookies.set(REFRESH_TOKEN_KEY, token, { expires: expireTime });
};

export const getRefreshToken = () => {
  const token = Cookies.get(REFRESH_TOKEN_KEY);
  if (token) return token;
  return false;
};

export const delRefreshToken = () => {
  Cookies.remove(REFRESH_TOKEN_KEY);
};
