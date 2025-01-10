import InputComponent from "../input/input";
import styles from "./searchbar.module.css";

const SearchbarComponent = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const searchValue = formData.get("search");

    console.log({ searchValue });
  };

  return (
    <form className={styles.main_container} action={handleSubmit}>
      <InputComponent
        name="search"
        placeholder="Busca productos..."
        type="text"
        autocomplete="off"
      />
    </form>
  );
};

export default SearchbarComponent;
