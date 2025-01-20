import Link from "next/link";
import Image from "next/image";

import wppIcon from "@/assets/icons/wpp-icon.svg";
import mailIcon from "@/assets/icons/mail-icon.svg";
import igIcon from "@/assets/icons/ig-icon.svg";
import { navItems } from "@/constants/navbar";
import styles from "./footer.module.css";

const footer = () => (
  <footer className={styles.main_container}>
    <div className={styles.content_container}>
      <div className={styles.navigation}>
        <h3 className={styles.title}>OM</h3>
        <div className={styles.items_container}>
          {navItems.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className={styles.item_navigation}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.contact_data}>
        <div className={styles.social_networks}>
          <h3 className={styles.section_title}>Nuestras redes sociales</h3>
          <div className={styles.social_items}>
            <Link
              href="https://www.instagram.com/om.modaunica__/"
              target="_blank"
            >
              <Image
                src={igIcon}
                alt="instagram"
                title="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className={styles.contact_details}>
          <h3 className={styles.section_title}>Contacto</h3>
          <div className={styles.contact_items}>
            <Link
              className={styles.item_contact}
              href="mailto:om.modaunica@gmail.com"
              target="_blank"
            >
              <Image
                src={mailIcon}
                alt="mail"
                title="Mail"
                width={16}
                height={16}
              />
              om.modaunica@gmail.com
            </Link>
            <Link
              className={styles.item_contact}
              href="https://wa.me/+5493855126153"
              target="_blank"
            >
              <Image
                src={wppIcon}
                alt="whatsapp"
                title="Whatsapp"
                width={16}
                height={16}
              />
              3855126153
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      <p className={styles.copyright_title}>
        Desarrollado por{" "}
        <Link
          href="https://www.marco-galvan.online"
          target="_blank"
          className={styles.copyright_link}
        >
          Marco 😎
        </Link>
      </p>
    </div>
  </footer>
);

export default footer;
