import { redirect } from "next/navigation";

import InputComponent from "../input/input";
import styles from "./searchbar.module.css";

const SearchbarComponent = () => {
  const actionSubmit = async (formData: FormData) => {
    "use server";

    const searchValue = formData.get("search");
    if (!searchValue) return;

    redirect(`/productos?query=${searchValue}`);
  };

  return (
    <form className={styles.main_container} action={actionSubmit}>
      <InputComponent
        name="search"
        placeholder="Busca productos..."
        type="text"
      />
    </form>
  );
};

export default SearchbarComponent;
