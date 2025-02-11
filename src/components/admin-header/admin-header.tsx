import Link from "next/link";

import NavbarComponent from "../navbar/navbar";
import { adminNavItems } from "@/constants/admin-navbar";
import styles from "./admin-header.module.css";

const AdminHeader = () => (
  <header className={styles.main_container}>
    <div className={styles.content_container}>
      <Link href="/" className={styles.title}>
        OM
      </Link>
      <NavbarComponent isAdmin={true} navItems={adminNavItems} />
    </div>
  </header>
);

export default AdminHeader;
