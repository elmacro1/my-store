import NewIncome from "@/components/new-income/new-income";
import BestSellers from "@/components/best-sellers/best-sellers";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={styles.content_container}>
        <NewIncome />
        <BestSellers />
      </div>
    </main>
  );
}
