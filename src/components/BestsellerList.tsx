"use client";

import Link from "next/link";
import styles from "@/styles/BestsellerList.module.css";

interface List {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

interface BooksellerListProps {
  bestsellers: List[];
}

export default function BestsellerList({ bestsellers }: BooksellerListProps) {
  return (
    <div className={styles.grid}>
      {bestsellers.map((list) => (
        <div key={list.list_name} className={styles.card}>
          <Link
            prefetch
            href={`/list/${list.list_name_encoded}`}
            className={styles.cardLink}
          >
            <span className={styles.cardText}>{list.display_name}</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
