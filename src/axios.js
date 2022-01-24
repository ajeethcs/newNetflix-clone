import axios from "axios";
import { baseUrl } from "./requests";

// axios.create([]);
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
