"use client";

import { FormEvent, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import InputComponent from "../input/input";
import styles from "./searchbar.module.css";

const SearchbarComponent = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (term: string) => setSearchValue(term);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchValue) return;

    const params = new URLSearchParams(searchParams);
    params.set("query", searchValue);

    router.push(`/productos?${params.toString()}`);
  };

  const onInit = () => {
    const query = searchParams.get("query") || "";
    setSearchValue(query);
  };

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    if (pathname !== "/productos") setSearchValue("");
  }, [pathname]);

  return (
    <form className={styles.main_container} onSubmit={handleSubmit}>
      <InputComponent
        name="search"
        placeholder="Busca productos..."
        type="text"
        autocomplete="off"
        onChange={handleChange}
        value={searchValue}
      />
    </form>
  );
};

export default SearchbarComponent;
