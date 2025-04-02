"use client"; // Nécessaire car on utilise useState et useEffect

import { useEffect, useState } from "react";
import BookService from "@/services/book-services";
import BookCard from "@/components/books/book-card";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await BookService.getBooks();
        setBooks(data); // Met à jour l'état avec les livres
      } catch (error) {
        console.error("Erreur lors de la récupération des livres :", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-6 md:p-24">
      <h1 className="mb-8">Bienvenue sur BookMarket</h1>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p>Aucun livre trouvé.</p>
      )}
    </main>
  );
}
