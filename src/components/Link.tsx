"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${styles.navLink} ${
          pathname === "/about" ? styles.active : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
}
