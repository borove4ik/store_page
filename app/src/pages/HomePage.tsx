import { useEffect, useState } from "react";
import { getProductsMain } from "../services/api";
import { Product } from "../types/product";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsMain().then((data) => {
      console.log("Products:", data);
      setProducts(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Главная</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

