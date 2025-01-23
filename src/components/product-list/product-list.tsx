import ProductCard from "../product-card/product-card";
import styles from "./product-list.module.css";

const ProductList = () => (
  <div className={styles.main_container}>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
);

export default ProductList;
