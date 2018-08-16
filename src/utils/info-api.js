import axios from 'axios';
import { getJSONIdToken, API_END_POINT, ID_LS_KEY } from '../app.config';

export function getUserFullName() {
  const lsData = JSON.parse(localStorage.getItem(ID_LS_KEY));
  return lsData.data.name;
}

export function getProfile() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}/profile`, { headers: { Authorization: `Bearer ${getJSONIdToken()}` } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}
