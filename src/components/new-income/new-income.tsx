import ProductList from "../product-list/product-list";
import styles from "./new-income.module.css";

const NewIncome = () => (
  <section className={styles.main_container}>
    <h2 className={styles.section_title}>Nuevos ingresos</h2>
    <ProductList />
  </section>
);

export default NewIncome;
