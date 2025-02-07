import { Suspense } from "react";

import FiltersMobileContainer from "@/components/filters-mobile-container/filters-mobile-container";
import FilterBar from "@/components/filter-bar/filter-bar";
import ProductList from "@/components/product-list/product-list";
import styles from "./page.module.css";

const ProductosPage = () => {
  const categories = [
    {
      label: "Todas",
      value: "todas",
    },
    {
      label: "Hogar",
      value: "hogar",
    },
    {
      label: "Tecnología",
      value: "tecnología",
    },
    {
      label: "Moda",
      value: "moda",
    },
    {
      label: "Deportes",
      value: "deportes",
    },
  ];

  const orderBy = [
    {
      label: "Más recientes",
      value: "recientes",
    },
    {
      label: "Precio: Menor a mayor",
      value: "menor",
    },
    {
      label: "Precio: Mayor a menor",
      value: "mayor",
    },
  ];

  return (
    <main className={styles.main_container}>
      <div className={styles.content_container}>
        <Suspense>
          <FiltersMobileContainer />
          <FilterBar filters={categories} tag="categorie" title="Categorias" />
          <ProductList />
          <FilterBar filters={orderBy} tag="sort" title="Ordenar por" />
        </Suspense>
      </div>
    </main>
  );
};

export default ProductosPage;
