import axios from "axios";
import { sanitizeQuery } from "../utils/sanitizeQuery";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export const runQuery = async (query: string) => {
    const sanitizedQuery = sanitizeQuery(query);

    const response = await axios.post(`${API_URL}/query`, { query: sanitizedQuery });
    return response.data;
};

export const uploadSQLFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${API_URL}/upload`, formData);
    return response.data;
};
