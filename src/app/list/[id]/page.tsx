import BookList from "@/components/BookList";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";

interface ListPageProps {
  params: { id: string };
}

export const API_URL = "https://books-api.nomadcoders.workers.dev/list";

export const metadata = {
  title: "Detail",
};

async function getBooksInList(listName: string) {
  const res = await fetch(`${API_URL}?name=${listName}`);
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await res.json();
  return data.results.books;
}

export default async function ListPage({ params }: ListPageProps) {
  const books = await getBooksInList(params.id);

  return (
    <div>
      <h1>{params.id.replace("-", " ")}</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <BookList books={books} />
      </Suspense>
    </div>
  );
}
