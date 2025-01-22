import ProductCard from "@/components/product-card/ProductCard";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hola mundo!</h1>
      <ProductCard />
    </main>
  );
}
