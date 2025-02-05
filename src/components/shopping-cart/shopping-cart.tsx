import Button from "../button/button";
import styles from "./shopping-cart.module.css";

interface Props {
  isOpen: boolean;
  closeSlide: () => void;
}

const ShoppingCart = ({ isOpen, closeSlide }: Props) => {
  return (
    <div
      className={`${styles.main_container} ${isOpen ? styles.open_slide : ""}`}
    >
      <div className={styles.content_container}>
        <h3 className={styles.title}>Carrito</h3>
        <p className={styles.label_empty}>Carrito vacio</p>
        <Button
          label="Cerrar"
          onClick={closeSlide}
          customClass={styles.close_button}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
