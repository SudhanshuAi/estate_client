import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-api-1.onrender.com",
  withCredentials: true,
});

export default apiRequest;
