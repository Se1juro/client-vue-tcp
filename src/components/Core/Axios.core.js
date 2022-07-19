import { API_HOST } from "@/constants/api.config";
import axios from "axios";

export const apiAxios = axios.create({
  baseURL: API_HOST,
});
