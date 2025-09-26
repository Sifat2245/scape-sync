import axios from "axios";

const api = axios.create({
  baseURL: "https://apitest.softvencefsd.xyz/api",
});

export default api;