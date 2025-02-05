"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ShoppingCart from "../shopping-cart/shopping-cart";
import Button from "../button/button";
import { useResize } from "@/hooks/useResize.hook";
import { navItems } from "@/constants/navbar";
import burgerIcon from "@/assets/icons/burger-menu.svg";
import shoppingCartIcon from "@/assets/icons/shopping-cart.svg";
import styles from "./navbar.module.css";

const NavbarComponent = () => {
  const [slideMenuIsOpen, setSlideMenuIsOpen] = useState(false);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const { isMobile } = useResize();
  const pathname = usePathname();

  const openSlideMenu = () => setSlideMenuIsOpen(true);
  const closeSlideMenu = () => setSlideMenuIsOpen(false);

  const openSlideShoppingCart = () => setShoppingCartIsOpen(true);
  const closeSlideShoppingCart = () => setShoppingCartIsOpen(false);

  return (
    <nav className={styles.main_container}>
      <div
        className={`${styles.overlay} ${
          slideMenuIsOpen ? styles.menu_open : ""
        }`}
      >
        <div
          className={`${styles.nav_container} ${
            slideMenuIsOpen ? styles.nav_container_open : ""
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
        {isMobile && (
          <Button
            label="Cerrar"
            onClick={closeSlideMenu}
            customClass={styles.close_button}
          />
        )}
      </div>
      <Image
        src={shoppingCartIcon}
        alt="shopping icon"
        className={styles.shopping_cart_icon}
        width={24}
        height={24}
        onClick={openSlideShoppingCart}
      />
      <Image
        src={burgerIcon}
        alt="burger icon"
        width={20}
        height={20}
        className={styles.burger_icon}
        onClick={openSlideMenu}
      />
      <ShoppingCart
        isOpen={shoppingCartIsOpen}
        closeSlide={closeSlideShoppingCart}
      />
    </nav>
  );
};

export default NavbarComponent;
