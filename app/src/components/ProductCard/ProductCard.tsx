// src/components/ProductCard/ProductCard.tsx
import React from "react";
import type { ApiProduct } from "../../types/product";
import styles from "./ProductCard.module.css";

type Props = {
  product: ApiProduct;
};

const getImageFromProduct = (p: ApiProduct): string | undefined => {
  if (!p) return undefined;
  if (typeof p.image === "string" && p.image) return p.image;
  if (typeof p.main_image === "string" && p.main_image) return p.main_image;
  if (typeof p.picture === "string" && p.picture) return p.picture;
  if (Array.isArray(p.images) && p.images.length) return p.images[0];
  if (Array.isArray(p.pictures) && p.pictures.length) return p.pictures[0];
  // иногда приходят относительные пути — можно обработать при необходимости
  return undefined;
};

const getNameFromProduct = (p: ApiProduct): string => {
  return p.name ?? p.title ?? p.product_name ?? "Без названия";
};

const getPriceFromProduct = (p: ApiProduct): number | null => {
  const tryValues = [p.price, p.price_rub, p.price_value];
  for (const v of tryValues) {
    if (v === undefined || v === null) continue;
    const num = typeof v === "number" ? v : Number(String(v).replace(/\s+/g, "").replace(/,/g, "."));
    if (!Number.isNaN(num)) return num;
  }
  // иногда цена лежит глубже, попробуем плодотворно:
  if (p?.prices && typeof p.prices === "object") {
    const possible = (p.prices as any).price || (p.prices as any).value;
    const num = Number(possible);
    if (!Number.isNaN(num)) return num;
  }
  return null;
};

const formatPrice = (val: number | null) => {
  if (val === null) return "—";
  try {
    return new Intl.NumberFormat("ru-RU").format(val) + " ₽";
  } catch {
    return `${val} ₽`;
  }
};

const ProductCard = ({ product }: Props) => {
  const img = getImageFromProduct(product);
  const name = getNameFromProduct(product);
  const price = getPriceFromProduct(product);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {img ? (
          // для относительных ссылок можно добавить базу: `${BASE_URL}${img}`
          // добавь alt и loading="lazy"
          <img src={img} alt={name} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>Нет изображения</div>
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.name} title={name}>
          {name}
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>{formatPrice(price)}</div>
          <button className={styles.btn}>Выбрать</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
