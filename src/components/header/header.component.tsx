import Link from "next/link";

import SearchbarComponent from "../common/searchbar/searchbar.component";
import NavbarComponent from "../navbar/navbar.component";
import styles from "./header.module.css";

const HeaderComponent = () => (
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

export default HeaderComponent;
