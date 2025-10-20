// src/pages/HomePage.tsx
import { useEffect, useState } from "react";
import { getProductsMain } from "../services/api";
import type { ApiProduct } from "../types/product";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");     
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getProductsMain()
      .then((data) => {
        const list = Array.isArray(data?.products) ? data.products : [];
        console.log("🔍 API products sample:", list[0]);
        setProducts(list);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Не удалось загрузить товары");
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔍 Локальная фильтрация товаров
  const filteredProducts = products.filter((product) => {
    const name =
      product.name ||
      product.title ||
      product.product_name ||
      "";
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={styles.main}>
      <div className={styles.container}>

        {/* Поле ввода для поиска */}
        <input
          type="text"
          placeholder="Поиск товаров..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {loading && <div className={styles.loader}>Загрузка товаров...</div>}
        {error && <div className={styles.error}>{error}</div>}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className={styles.empty}>Ничего не найдено</div>
        )}

        {!loading && filteredProducts.length > 0 && (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id ?? Math.random()} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
