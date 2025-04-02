"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BookService from "@/services/book-services";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await BookService.getBooks();
        setBooks(data); // Met à jour l'état avec les livres
      } catch (error) {
        console.error("Erreur lors de la récupération des livres :", error);
      } finally {
        setLoading(false); // Met fin au chargement
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Chargement des livres...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Explorer les livres</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-500">{book.author}</p>
              <div className="mt-4">
                <button className="bg-primary text-white px-4 py-2 rounded-lg">
                  Voir Détails
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun livre trouvé.</p>
        )}
      </div>
    </div>
  );
}