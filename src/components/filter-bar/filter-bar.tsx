"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { useResize } from "@/hooks/useResize.hook";
import styles from "./filter-bar.module.css";

interface Props {
  title: string;
  filters: { label: string; value: string }[];
  tag: string;
}

const FilterBar = ({ title, filters, tag }: Props) => {
  const { isMobile } = useResize();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleClick = (item: string) => {
    params.set(tag, item);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    !isMobile && (
      <aside className={styles.main_container}>
        <p className={styles.filter_title}>{title}</p>
        <ul className={styles.filter_list}>
          {filters.map((item, index) => (
            <li
              className={`${styles.filter_item} ${
                params.get(tag)?.includes(item.value) ? styles.active : ""
              }`}
              key={index}
              onClick={() => handleClick(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
    )
  );
};

export default FilterBar;
