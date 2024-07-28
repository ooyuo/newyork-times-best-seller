import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";
import { Links } from "@/components/Link";
import ThemeToggle from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Newyork times",
    default: "Newyork times",
  },
  description: "Newyork times best seller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Links />
            <ThemeToggle />
          </header>
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
