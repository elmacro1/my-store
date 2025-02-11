import { Product } from "@/models/product.model";
import ProductList from "../product-list/product-list";
import styles from "./best-sellers.module.css";

interface Props {
  products: Product[];
}

const BestSellers = ({ products }: Props) => (
  <section className={styles.main_container}>
    <h2 className={styles.section_title}>Más vendidos</h2>
    <ProductList products={products} />
  </section>
);

export default BestSellers;
