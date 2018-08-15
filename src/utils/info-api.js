import axios from 'axios';
import { API_END_POINT, ID_TOKEN_KEY } from '../app.config';

function handleResponse(res) {
  Promise.resolve(res.data);
}

function handleError(err) {
  Promise.reject(err.response.data);
}

export function getIdToken() {
  const idToken = JSON.parse(localStorage.getItem(ID_TOKEN_KEY));
  return idToken.token;
}

export function getProfile() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}/profile`, { headers: { Authorization: `Bearer ${getIdToken()}` } })
      /* .then((res) => {
        resolve(res.data);
      }) */
      .then(
        (response) => {
          handleResponse(response);
        },
        (err) => {
          handleError(err);
        },
       )
      .catch((err) => {
        reject(err.response.data);
      });
  });
}
