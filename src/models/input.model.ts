type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "textarea";

export interface InputProps {
  placeholder: string;
  type: InputType;
  name: string;
  autocomplete?: string;
  onChange?: (value: string) => void;
  value?: string;
  customClass?: string;
}
