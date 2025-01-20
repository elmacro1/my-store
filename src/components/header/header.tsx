import Link from "next/link";

import SearchbarComponent from "../common/searchbar/searchbar";
import NavbarComponent from "../navbar/navbar";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <Link href="/" className={styles.title}>
        OM
      </Link>
      <SearchbarComponent />
      <NavbarComponent />
    </div>
  </header>
);

export default Header;
