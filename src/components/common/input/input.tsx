import type { InputProps } from "@/models/input.model";
import styles from "./input.module.css";
import InputClientComponent from "./input.client";

const InputServerComponent = ({
  placeholder,
  type,
  name,
  autocomplete = "off",
  customClass,
}: InputProps) =>
  type === "textarea" ? (
    <textarea
      className={`${styles.main_container} ${customClass}`}
      placeholder={placeholder}
      name={name}
      autoComplete={autocomplete}
    ></textarea>
  ) : (
    <input
      className={`${styles.main_container} ${customClass}`}
      placeholder={placeholder}
      type={type}
      name={name}
      autoComplete={autocomplete}
    ></input>
  );

const InputComponent = ({
  placeholder,
  type,
  name,
  autocomplete = "",
  onChange,
  value,
  customClass = "",
}: InputProps) => {
  return onChange ? (
    <InputClientComponent
      name={name}
      placeholder={placeholder}
      type={type}
      autocomplete={autocomplete}
      onChange={onChange}
      value={value}
      customClass={customClass}
    />
  ) : (
    <InputServerComponent
      name={name}
      placeholder={placeholder}
      type={type}
      autocomplete={autocomplete}
      customClass={customClass}
    />
  );
};

export default InputComponent;
