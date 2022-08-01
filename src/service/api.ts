import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: { apikey: process.env.REACT_APP_KEY_OMDB },
});
