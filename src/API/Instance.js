import axios from "axios";
export const instance = axios.create({
  baseURL: 'https://64d64f1f754d3e0f1361ecac.mockapi.io',
});