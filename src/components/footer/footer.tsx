import styles from "./footer.module.css";

const footer = () => (
  <footer className={styles.main_container}>
    <div className={styles.content_container}>
      <div className={styles.payment_methods}></div>
      <div className={styles.social_networks}></div>
    </div>
  </footer>
);

export default footer;
