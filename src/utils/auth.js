import axios from 'axios';
import { API_END_POINT, ID_TOKEN_KEY, ROLE_SADMIN, ROLE_ADMIN, ROLE_RESIDENT, ROLE_SECURITY } from '../app.config';

/*
const ACCESS_TOKEN_KEY = 'access_token';
const REDIRECT = 'YOUR_CALLBACK_URL';
const SCOPE = '{SCOPE}';
const AUDIENCE = 'AUDIENCE_ATTRIBUTE'; */

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
  // clearAccessToken();
  // router.go('/');
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

/*
export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
} */
