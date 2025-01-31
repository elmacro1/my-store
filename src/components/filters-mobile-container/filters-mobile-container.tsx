"use client";

import FilterMobile from "../filter-mobile/filter-mobile";
import { useResize } from "@/hooks/useResize.hook";
import styles from "./filters-mobile-container.module.css";

const FiltersMobileContainer = () => {
  const { isMobile } = useResize();

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
    isMobile && (
      <div className={styles.main_container}>
        <FilterMobile filters={categories} tag="categorie" title="Categorias" />
        <FilterMobile filters={orderBy} tag="sort" title="Ordenar por" />
      </div>
    )
  );
};

export default FiltersMobileContainer;
