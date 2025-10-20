import axios from "axios";
import type { ApiProduct } from "../types/product";

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

export const searchProducts = async (query: string): Promise<ApiProduct[]> => {
    const products = await fetchProducts(); 
    return products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  