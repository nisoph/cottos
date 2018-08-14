// export const API_END_POINT = 'http://localhost:3000/api/v1';
export const API_END_POINT = 'https://konddify-api.herokuapp.com/api/v1';
export const ID_TOKEN_KEY = 'userinfo';
export const ROLE_SADMIN = 'SADMIN';
export const ROLE_ADMIN = 'ADMIN';
export const ROLE_RESIDENT = 'RESIDENT';
export const ROLE_SECURITY = 'SECURITY';

export const getHeader = function getHeader() {
  const tokenData = JSON.parse(window.localStorage.getItem(ID_TOKEN_KEY));
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer${tokenData.access_token}`,
  };
  return headers;
};
