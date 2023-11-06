import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const api = axios.create({
  baseURL: BASE_URL,
});

/*axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";*/

export default api;
