import Link from "next/link";
import Image from "next/image";

import productImage from "@/assets/images/IMG_9024.jpg";
import styles from "./product-card.module.css";

const ProductCard = () => (
  <Link href="/productos/top-tira-ancha" className={styles.main_container}>
    <div className={styles.content_container}>
      <Image
        className={styles.product_image}
        src={productImage}
        alt="Product"
        title="Product"
        width={300}
        height={300}
      />
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>Top tira ancha</h3>
        <p className={styles.product_price}>$100.00</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
