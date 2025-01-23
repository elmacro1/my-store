import styles from "./filter-bar.module.css";

const FilterBar = () => (
  <aside className={styles.main_container}>
    <p className={styles.filter_title}>Categorías</p>
    <ul className={styles.filter_list}>
      <li className={styles.filter_item}>Tops</li>
      <li className={styles.filter_item}>Remeras</li>
      <li className={styles.filter_item}>Calzas cortas</li>
      <li className={styles.filter_item}>Calzas largas</li>
      <li className={styles.filter_item}>Corpiños</li>
    </ul>
  </aside>
);

export default FilterBar;
