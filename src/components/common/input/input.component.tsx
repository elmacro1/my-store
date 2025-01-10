import styles from "./input.module.css";

type InputType = "text" | "password" | "email" | "number" | "tel" | "url";

interface Props {
  placeholder: string;
  type: InputType;
  name: string;
  autocomplete?: string;
}

const InputComponent = ({
  placeholder,
  type,
  name,
  autocomplete = "",
}: Props) => {
  return (
    <input
      className={styles.main_container}
      placeholder={placeholder}
      type={type}
      name={name}
      autoComplete={autocomplete}
    ></input>
  );
};

export default InputComponent;
