type InputType = "text" | "password" | "email" | "number" | "url" | "textarea";

export interface InputProps {
  placeholder: string;
  type: InputType;
  name: string;
  autocomplete?: string;
  onChange?: (value: string) => void;
  value?: string;
  customClass?: string;
  required?: boolean;
}
