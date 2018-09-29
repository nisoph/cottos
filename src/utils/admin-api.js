import axios from 'axios';
import { getJSONIdToken, API_END_POINT } from '../app.config';

export function getCotoInfo() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}/admin/properties`, { headers: { Authorization: `Bearer ${getJSONIdToken()}` } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

/**
 * TO Remove (Quick Fix)
 */
export const foo = '';
