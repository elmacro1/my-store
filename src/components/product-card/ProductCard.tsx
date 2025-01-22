import Image from "next/image";

import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <Image
          className={styles.product_image}
          src="https://via.placeholder.com/150"
          alt="Product"
          title="Product"
          width={150}
          height={150}
        />
        <div className={styles.product_info}>
          <h3 className={styles.product_name}>Product name</h3>
          <p className={styles.product_description}>Product description</p>
          <p className={styles.product_price}>$100.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
