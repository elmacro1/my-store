import { Suspense } from "react";

import { getProducts, getCategories } from "@/lib/actions";
import { orderBy } from "@/constants/order-by";
import FiltersMobileContainer from "@/components/filters-mobile-container/filters-mobile-container";
import FilterBar from "@/components/filter-bar/filter-bar";
import ProductList from "@/components/product-list/product-list";
import styles from "./page.module.css";

const ProductosPage = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main className={styles.main_container}>
      <div className={styles.content_container}>
        <Suspense>
          <FiltersMobileContainer />
          <FilterBar filters={categories} tag="categorie" title="Categorias" />
          <ProductList products={products} />
          <FilterBar filters={orderBy} tag="sort" title="Ordenar por" />
        </Suspense>
      </div>
    </main>
  );
};

export default ProductosPage;
