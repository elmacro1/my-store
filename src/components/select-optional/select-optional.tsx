import type { SelectOptionalModel } from "@/models/select-optional.model";

import styles from "./select-optional.module.css";

interface Props {
  selectOptional: SelectOptionalModel;
  handleSelect: (tag: string, value: string) => void;
  optionSelected: string;
}

const SelectOptional = ({
  selectOptional: { title, options },
  handleSelect,
  optionSelected,
}: Props) => (
  <div className={styles.main_container}>
    <p className={styles.option_title}>{title.toUpperCase()}</p>
    <div className={styles.options_list}>
      {options.map((option) => (
        <button
          className={`${styles.option_item} ${
            optionSelected === option.value ? styles.selected : ""
          }`}
          key={option.id}
          onClick={() => handleSelect(title, option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

export default SelectOptional;
