import FilterBar from "@/components/filter-bar/filter-bar";
import ProductList from "@/components/product-list/product-list";
import styles from "./page.module.css";

const ProductosPage = () => {
  const categories = ["Todas", "Hogar", "Tecnología", "Moda", "Deportes"];
  const orderBy = [
    "Más recientes",
    "Precio: Menor a mayor",
    "Precio: Mayor a menor",
  ];

  return (
    <main className={styles.main_container}>
      <div className={styles.content_container}>
        <FilterBar filters={categories} tag="categorie" title="Categorias" />
        <ProductList />
        <FilterBar filters={orderBy} tag="sort" title="Ordenar por" />
      </div>
    </main>
  );
};

export default ProductosPage;
