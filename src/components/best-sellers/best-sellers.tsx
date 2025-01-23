import ProductList from "../product-list/product-list";
import styles from "./best-sellers.module.css";

const BestSellers = () => (
  <section className={styles.main_container}>
    <h2 className={styles.section_title}>Más vendidos</h2>
    <ProductList />
  </section>
);

export default BestSellers;
