import type { InputProps } from "@/models/input.model";
import styles from "./input.module.css";

const InputClientComponent = ({
  placeholder,
  type,
  name,
  autocomplete = "off",
  onChange,
  value,
  customClass,
  required = false,
}: InputProps) =>
  type === "textarea" ? (
    <textarea
      className={`${styles.main_container} ${customClass}`}
      placeholder={placeholder}
      name={name}
      autoComplete={autocomplete}
      onChange={(event) => onChange!(event.target.value)}
      value={value}
      required={required}
    ></textarea>
  ) : (
    <input
      className={`${styles.main_container} ${customClass}`}
      placeholder={placeholder}
      type={type}
      name={name}
      autoComplete={autocomplete}
      onChange={(event) => onChange!(event.target.value)}
      value={value}
      required={required}
    ></input>
  );

export default InputClientComponent;
