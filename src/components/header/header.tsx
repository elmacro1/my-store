import Link from "next/link";

import SearchbarComponent from "../common/searchbar/searchbar";
import NavbarComponent from "../navbar/navbar";
import { navItems } from "@/constants/navbar";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <Link href="/" className={styles.title}>
        OM
      </Link>
      <SearchbarComponent />
      <NavbarComponent isAdmin={false} navItems={navItems} />
    </div>
  </header>
);

export default Header;
