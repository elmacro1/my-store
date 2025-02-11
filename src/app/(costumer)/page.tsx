import { Suspense } from "react";

import NewIncome from "@/components/new-income/new-income";
import BestSellers from "@/components/best-sellers/best-sellers";
import { getProducts } from "@/lib/actions";

import styles from "./page.module.css";

export default async function Home() {
  const data = await getProducts();
  console.log(data);

  return (
    <main className={styles.main_container}>
      <div className={styles.content_container}>
        <Suspense>
          <NewIncome products={data} />
          <BestSellers products={data} />
        </Suspense>
      </div>
    </main>
  );
}
