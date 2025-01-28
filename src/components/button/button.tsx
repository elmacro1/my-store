import styles from "./button.module.css";

interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);

export default Button;
