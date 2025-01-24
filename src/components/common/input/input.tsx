import styles from "./input.module.css";

type InputType = "text" | "password" | "email" | "number" | "tel" | "url";

interface Props {
  placeholder: string;
  type: InputType;
  name: string;
  autocomplete?: string;
  onChange: (value: string) => void;
  value: string;
}

const InputComponent = ({
  placeholder,
  type,
  name,
  autocomplete = "",
  onChange,
  value,
}: Props) => (
  <input
    className={styles.main_container}
    placeholder={placeholder}
    type={type}
    name={name}
    autoComplete={autocomplete}
    onChange={(event) => onChange(event.target.value)}
    value={value}
  ></input>
);

export default InputComponent;
