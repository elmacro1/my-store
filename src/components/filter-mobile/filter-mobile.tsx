"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import chevronIcon from "@/assets/icons/chevron.svg";
import styles from "./filter-mobile.module.css";

interface Props {
  title: string;
  filters: { label: string; value: string }[];
  tag: string;
}

const FilterMobile = ({ title, filters, tag }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleDropdown = () => setIsOpen((value) => !value);

  const handleClick = (item: { label: string; value: string }) => {
    handleDropdown();
    setSelected(item.label);
    params.set(tag, item.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const getSelected = () => {
    const selectedFilter = params.get(tag);

    return (
      filters.find((item) => item.value === selectedFilter)?.label || title
    );
  };

  const onParamsChange = () => {
    setSelected(getSelected());
  };

  const handleClickOutside = (event: MouseEvent) => {
    const button = document.getElementById(`dropdown-button-${tag}`);
    const menu = document.getElementById(`dropdown-menu-${tag}`);

    if (
      button &&
      menu &&
      event.target instanceof Node &&
      !button.contains(event.target) &&
      !menu.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onParamsChange();
  }, [searchParams]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className={styles.main_container}>
      <button
        type="button"
        onClick={handleDropdown}
        className={`${styles.button} ${isOpen ? styles.button_open : ""}`}
        id={`dropdown-button-${tag}`}
      >
        {selected}
        <Image
          src={chevronIcon}
          alt="chevron icon"
          title="chevron icon"
          className={`${styles.chevron_icon} ${
            isOpen ? styles.chevron_icon_open : ""
          }`}
          width={20}
          height={20}
        />
      </button>
      <ul
        className={`${styles.filter_list} ${
          isOpen ? styles.filter_list_open : ""
        }`}
        id={`dropdown-menu-${tag}`}
      >
        {filters.map((item, index) => (
          <li
            key={index}
            className={styles.filter_item}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMobile;
