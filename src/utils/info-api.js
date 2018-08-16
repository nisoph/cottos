import axios from 'axios';
import { API_END_POINT, ID_TOKEN_KEY } from '../app.config';

export function getIdToken() {
  const idToken = JSON.parse(localStorage.getItem(ID_TOKEN_KEY));
  return idToken.token;
}

export function getUserFullName() {
  const idToken = JSON.parse(localStorage.getItem(ID_TOKEN_KEY));
  return idToken.data.name;
}

export function getProfile() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}/profile`, { headers: { Authorization: `Bearer ${getIdToken()}` } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}
