import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
    },
    define: {
        "process.env": {
            API_URL: "http://localhost:8080/api",
        },
    },
});
