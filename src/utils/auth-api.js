import axios from 'axios';
import { API_END_POINT, ID_TOKEN_KEY, ROLE_SADMIN, ROLE_ADMIN, ROLE_RESIDENT, ROLE_SECURITY } from '../app.config';

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getUserRole() {
  const idToken = JSON.parse(window.localStorage.getItem(ID_TOKEN_KEY));
  return idToken.data.role;
}

export function login(value) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_END_POINT}/auth/login`, value)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken;
}

export function logout() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function isSuperAdmin() {
  return getUserRole() === ROLE_SADMIN;
}

export function isResidentAdmin() {
  return getUserRole() === ROLE_ADMIN;
}

export function isResident() {
  return getUserRole() === ROLE_RESIDENT;
}

export function isResidentSecurity() {
  return getUserRole() === ROLE_SECURITY;
}
