import axios from "axios";

const API_BASE_URL = "https://noxer-test.ru/webapp/api/products";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProductsMain = async () => {
  const response = await api.get("/on_main");
  return response.data;
};

export const getProductsFiltered = async (page: number = 1, perPage: number = 50) => {
  const response = await api.post(`/filter?per_page=${perPage}&page=${page}`);
  return response.data;
};
