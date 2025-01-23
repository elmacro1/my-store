import FilterBar from "@/components/filter-bar/filter-bar";
import ProductList from "@/components/product-list/product-list";
import styles from "./page.module.css";

const ProductosPage = () => (
  <main className={styles.main_container}>
    <div className={styles.content_container}>
      <FilterBar />
      <ProductList />
      <FilterBar />
    </div>
  </main>
);

export default ProductosPage;
