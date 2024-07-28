"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Layout.module.css";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setThemeMode(savedTheme as "dark" | "light");
      document.body.dataset.theme = savedTheme;
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const themeModeHandle = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={themeModeHandle} className={styles.themeToggle}>
      {themeMode === "dark" ? (
        <FaMoon size={20} color="#fff" />
      ) : (
        <FaSun size={20} color="#000" />
      )}
    </div>
  );
}
