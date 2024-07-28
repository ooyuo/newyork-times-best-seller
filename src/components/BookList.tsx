import styles from "@/styles/BookList.module.css";
import Image from "next/image";
import Link from "next/link";

interface Book {
  rank: number;
  title: string;
  author: string;
  description: string;
  book_image: string;
  amazon_product_url: string;
}

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <div key={book.rank} className={styles.card}>
          <Link
            href={book.amazon_product_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={book.book_image}
              alt={book.title}
              className={styles.bookImage}
              width={333}
              height={500}
            />
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>Author: {book.author}</p>
            <p className={styles.bookDescription}>{book.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
