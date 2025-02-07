import styles from "./button.module.css";

interface Props {
  label: string;
  onClick?: () => void;
  customClass?: string;
}

const Button = ({ label, onClick, customClass = "" }: Props) => (
  <button className={`${styles.button} ${customClass}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
