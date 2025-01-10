"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/constants/navbar";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import shoppingCartIcon from "@/assets/icons/shopping-cart.svg";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openSlideMenu = () => setIsOpen(true);
  const closeSlideMenu = () => setIsOpen(false);

  return (
    <nav className={styles.main_container}>
      <div className={`${styles.overlay} ${isOpen ? styles.menu_open : ""}`}>
        <div
          className={`${styles.nav_container} ${
            isOpen ? styles.nav_container_open : ""
          }`}
        >
          {navItems.map(({ name, route }) => (
            <Link
              key={name}
              href={route}
              className={`${styles.item} ${
                pathname === route ? styles.active : ""
              }`}
              onClick={closeSlideMenu}
            >
              {name}
            </Link>
          ))}
        </div>
        <button className={styles.close_button} onClick={closeSlideMenu}>
          Cerrar
        </button>
      </div>
      <Image
        src={shoppingCartIcon}
        alt="shopping icon"
        className={styles.shopping_cart_icon}
        width={24}
        height={24}
      />
      <Image
        src={burgerIcon}
        alt="burger icon"
        width={20}
        height={20}
        className={styles.burger_icon}
        onClick={openSlideMenu}
      />
    </nav>
  );
};

export default NavbarComponent;
