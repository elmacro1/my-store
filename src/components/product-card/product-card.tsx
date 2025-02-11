import Link from "next/link";
import Image from "next/image";

import { Product } from "@/models/product.model";
import { formatCurrency } from "@/lib/format-currency";
import styles from "./product-card.module.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => (
  <Link href={`/productos/${product.slug}`} className={styles.main_container}>
    <div className={styles.content_container}>
      <Image
        className={styles.product_image}
        src={product.image_url}
        alt="Product"
        title="Product"
        width={300}
        height={300}
      />
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>{product.name}</h3>
        <p className={styles.product_price}>{formatCurrency(product.price)}</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
