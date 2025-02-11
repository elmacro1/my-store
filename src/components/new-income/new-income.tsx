import { Product } from "@/models/product.model";
import ProductList from "../product-list/product-list";
import styles from "./new-income.module.css";

interface Props {
  products: Product[];
}

const NewIncome = ({ products }: Props) => (
  <section className={styles.main_container}>
    <h2 className={styles.section_title}>Nuevos ingresos</h2>
    <ProductList products={products} />
  </section>
);

export default NewIncome;
