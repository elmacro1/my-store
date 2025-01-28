"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import Button from "../button/button";
import SelectOptional from "../select-optional/select-optional";
import type { SelectOptionalModel } from "@/models/select-optional.model";
import styles from "./product-details.module.css";

interface Props {
  optionals: SelectOptionalModel[];
  description: string;
}

const ProductDetails = ({ optionals, description }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (tag: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set(tag, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const addToCart = () => {
    console.log("agregando al carrito");
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.product_info}>
        <h2 className={styles.product_name}>Top tira ancha</h2>
        <p className={styles.product_price}>$100.00</p>
      </div>
      {optionals.map((optional, index) => (
        <SelectOptional
          selectOptional={optional}
          key={index}
          handleSelect={handleSelect}
          optionSelected={searchParams.get(optional.title) || ""}
        />
      ))}
      <p className={styles.product_description}>{description}</p>
      <Button label="Agregar al carrito" onClick={addToCart} />
    </div>
  );
};

export default ProductDetails;
