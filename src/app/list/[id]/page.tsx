import BookList from "@/components/BookList";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";

async function getBooksInList(listName: string) {
  const res = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${listName}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await res.json();
  return data.results.books;
}

export default async function ListPage({ params }: { params: { id: string } }) {
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
