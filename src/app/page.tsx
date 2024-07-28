import BestsellerList from "@/components/BestsellerList";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";

export const metadata = {
  title: "Home",
};

async function getBestsellers() {
  const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await res.json();
  return data.results;
}

export default async function Page() {
  const bestsellers = await getBestsellers();

  return (
    <div>
      <h1>New York Times Bestsellers</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <BestsellerList bestsellers={bestsellers} />
      </Suspense>
    </div>
  );
}
