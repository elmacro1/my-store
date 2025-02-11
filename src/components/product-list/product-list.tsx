import { Product } from "@/models/product.model";
import ProductCard from "../product-card/product-card";
import styles from "./product-list.module.css";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => (
  <div className={styles.main_container}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
