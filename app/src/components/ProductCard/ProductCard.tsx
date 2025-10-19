import { Product } from "../../types/product";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} />
      </div>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>{product.price} ₽</p>
    </div>
  );
};

export default ProductCard;
