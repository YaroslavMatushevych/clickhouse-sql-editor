export const sanitizeQuery = (query: string): string => {
    return query
        .split("\n") // Split into lines
        .map((line) => line.replace(/--.*/g, "").trim()) // Remove inline comments (--)
        .filter((line) => line.length > 0) // Remove empty lines
        .join(" ") // Join into a single-line query
        .replace(/\s*;\s*(DROP|ALTER|TRUNCATE|SHUTDOWN)\s+/gi, ""); // Block dangerous actions
};
