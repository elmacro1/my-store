import Link from "next/link";
import Image from "next/image";

import SearchbarComponent from "../common/searchbar/searchbar.component";
import shoppingCartIcon from "@/../public/icons/shopping-cart.svg";
import styles from "./header.styles.module.css";

const HeaderComponent = () => {
  return (
    <header className={styles.main_container}>
      <div className={styles.content_container}>
        <Link href="/" className={styles.title}>
          OM
        </Link>
        <SearchbarComponent />
        <Image
          src={shoppingCartIcon}
          alt="shopping icon"
          className={styles.shopping_cart_icon}
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
