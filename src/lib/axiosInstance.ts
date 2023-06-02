import axios from "axios";

export const axiosInstanceV3 = axios.create({
  baseURL: import.meta.env.VITE_V3_API_URL,
});

export const axiosInstanceV2 = axios.create({
  baseURL: import.meta.env.VITE_V2_API_URL,
});
