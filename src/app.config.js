// export const API_END_POINT = 'http://localhost:3000/api/v1';
// export const API_END_POINT = 'https://konddify-api.herokuapp.com/api/v1';
export const API_END_POINT = process.env.KONDDIFY_API_URL;
export const ID_LS_KEY = 'userinfo';
export const ID_TOKEN_KEY = 'token';
export const ROLE_SADMIN = 'SADMIN';
export const ROLE_ADMIN = 'ADMIN';
export const ROLE_RESIDENT = 'RESIDENT';
export const ROLE_SECURITY = 'SECURITY';

export const getHeader = function getHeader() {
  const lsData = JSON.parse(window.localStorage.getItem(ID_LS_KEY));
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer${lsData.access_token}`,
  };
  return headers;
};

export function getLSData() {
  return localStorage.getItem(ID_LS_KEY);
}

export function getJSONLSData() {
  return JSON.parse(window.localStorage.getItem(ID_LS_KEY));
}

export function getJSONIdToken() {
  return getJSONLSData().token;
}
