"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import styles from "./filter-bar.module.css";

interface Props {
  title: string;
  filters: string[];
  tag: string;
}

const FilterBar = ({ title, filters, tag }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleClick = (item: string) => {
    const formattedItem = item.toLowerCase();
    console.log({ formattedItem });

    params.set(tag, formattedItem);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className={styles.main_container}>
      <p className={styles.filter_title}>{title}</p>
      <ul className={styles.filter_list}>
        {filters.map((item, index) => (
          <li
            className={`${styles.filter_item} ${
              params.get(tag)?.includes(item.toLowerCase()) ? styles.active : ""
            }`}
            key={index}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterBar;
