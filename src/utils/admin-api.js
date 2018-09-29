import axios from 'axios';
import { getJSONIdToken, API_END_POINT } from '../app.config';

export function getCotoInfo() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}/admin/coto`, { headers: { Authorization: `Bearer ${getJSONIdToken()}` } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

export function getProperties() {
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

export function addProperty(value) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_END_POINT}/admin/property`, value, { headers: { Authorization: `Bearer ${getJSONIdToken()}`, 'Content-Type': 'multipart/form-data' } })
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
