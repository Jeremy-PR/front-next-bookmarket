import axios from "axios";

// Définir l'URL de l'API
const API_URL = "http://localhost:8000/api";

// Configuration Axios avec l'intercepteur JWT
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/ld+json",
  },
});

// Ajouter automatiquement le token JWT à chaque requête
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const BookService = {
  /**
   * Récupérer tous les livres
   * @returns {Promise} - Liste des livres
   */
  getBooks: async () => {
    try {
      const response = await api.get("/books");
      return response.data["hydra:member"]; // Si API Platform, sinon response.data directement
    } catch (error) {
      throw error.response?.data || { message: "Erreur lors de la récupération des livres" };
    }
  },

  /**
   * Récupérer un livre par son ID
   * @param {number} id - ID du livre
   * @returns {Promise} - Détails du livre
   */
  getBookById: async (id) => {
    try {
      const response = await api.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Livre introuvable" };
    }
  },
};

export default BookService;
