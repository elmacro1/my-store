"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/constants/navbar";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.main_container}>
      {navItems.map(({ name, route }) => {
        return (
          <Link
            key={name}
            href={route}
            className={`${styles.item} ${
              pathname === route ? styles.active : ""
            }`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarComponent;
