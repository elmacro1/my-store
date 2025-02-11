import { Suspense } from "react";
import Image from "next/image";

import ProductDetails from "@/components/product-details/product-details";
import productImage from "@/assets/images/IMG_9024.jpg";
import styles from "./page.module.css";

const optionals = [
  {
    title: "color",
    options: [
      { id: "1", value: "verde", label: "Verde" },
      { id: "2", value: "azul", label: "Azul" },
      { id: "3", value: "rojo", label: "Rojo" },
    ],
  },
  {
    title: "talle",
    options: [
      { id: "1", value: "s", label: "S" },
      { id: "2", value: "m", label: "M" },
      { id: "3", value: "l", label: "L" },
      { id: "4", value: "xl", label: "XL" },
      { id: "5", value: "xxl", label: "XXL" },
    ],
  },
];

const description = "Top tira ancha, 100% algodón con lycra.";

const ProductPage = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <Image
          className={styles.product_image}
          src={productImage}
          alt="Imagen de producto"
          title="Top tira ancha"
          width={500}
          height={500}
        />
        <Suspense>
          <ProductDetails optionals={optionals} description={description} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;
