// src/utils/normalizeProduct.ts
import type { ApiProduct } from "../types/product";
import type { Product } from "../types/product";

export function normalizeProduct(item: ApiProduct): Product {
  return {
    id: item.id ?? 0,
    name: item.name || item.title || item.product_name || "Без названия",
    image:
      item.image ||
      item.main_image ||
      (item.images && item.images[0]) ||
      (item.pictures && item.pictures[0]) ||
      "",
    price: item.price || item.price_rub || item.price_value || "—"
  };
}
