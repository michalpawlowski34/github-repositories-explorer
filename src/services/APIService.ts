import axios from "axios";
import { API } from "../constants/API";

export const APIService = {
  get: async <T>(endpoint: string) => {
    const { data } = await axios.get<T>(`${API}${endpoint}`);
    return data;
  },
};
