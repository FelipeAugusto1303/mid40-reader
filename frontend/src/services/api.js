import axios from "axios";

const baseUrl = "http://192.168.100.40:4000/";

export const api = axios.create({
  baseURL: baseUrl,
});
