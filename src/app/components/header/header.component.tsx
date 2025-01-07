import Link from "next/link";
import Image from "next/image";

import SearchbarComponent from "../common/searchbar/searchbar.component";
import NavbarComponent from "../navbar/navbar.component";
import shoppingCartIcon from "@/app/assets/icons/shopping-cart.svg";
import burgerIcon from "@/app/assets/icons/burger-menu.svg";
import styles from "./header.module.css";

const HeaderComponent = () => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <Image
        src={burgerIcon}
        alt="burger icon"
        width={20}
        height={20}
        className={styles.burger_icon}
      />
      <Link href="/" className={styles.title}>
        OM
      </Link>
      <div className={styles.searchbar_container}>
        <SearchbarComponent />
      </div>
      <Image
        src={shoppingCartIcon}
        alt="shopping icon"
        className={styles.shopping_cart_icon}
        width={24}
        height={24}
      />
      <NavbarComponent />
    </div>
  </header>
);

export default HeaderComponent;
