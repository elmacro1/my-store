import Link from "next/link";
import Image from "next/image";

import mailIcon from "@/assets/icons/mail-icon.svg";
import wppIcon from "@/assets/icons/wpp-icon.svg";
import igIcon from "@/assets/icons/ig-icon.svg";
import styles from "./contact-details.module.css";

const ContactDetails = () => (
  <section className={styles.main_container}>
    <div className={styles.description_container}>
      <p className={styles.description}>
        Hola! Somos <strong>OM - Moda Única</strong>. Vendemos la mejor calidad
        en indumentaria deportiva <strong>AL MEJOR PRECIO!</strong>
      </p>
      <p className={styles.description}>Hace tu pedido online!</p>
    </div>
    <div className={styles.contact_links}>
      <Link
        className={styles.item_contact}
        href="mailto:om.modaunica@gmail.com"
        target="_blank"
      >
        <Image
          className={styles.icon}
          src={mailIcon}
          alt="mail"
          title="Mail"
          width={20}
          height={20}
        />
        om.modaunica@gmail.com
      </Link>
      <Link
        className={styles.item_contact}
        href="https://wa.me/+5493855126153"
        target="_blank"
      >
        <Image
          className={styles.icon}
          src={wppIcon}
          alt="whatsapp"
          title="Whatsapp"
          width={20}
          height={20}
        />
        3855126153
      </Link>
      <Link
        className={styles.item_contact}
        href="https://www.instagram.com/om.modaunica__/"
        target="_blank"
      >
        <Image
          className={styles.icon}
          src={igIcon}
          alt="instagram"
          title="Instagram"
          width={20}
          height={20}
        />
        om.modaunica__
      </Link>
    </div>
  </section>
);

export default ContactDetails;
