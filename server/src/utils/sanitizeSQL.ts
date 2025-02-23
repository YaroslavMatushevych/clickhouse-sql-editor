export const sanitizeSQL = (query: string): string | null => {
    const forbiddenPatterns = [
        /DROP\s+TABLE\s+/i,  // Prevent dropping tables
        /DELETE\s+FROM\s+/i, // Prevent mass deletion
        /TRUNCATE\s+/i,      // Prevent table truncation
        /ALTER\s+TABLE\s+/i, // Prevent altering schemas
    ];

    for (const pattern of forbiddenPatterns) {
        if (pattern.test(query)) {
            return null; // Block dangerous queries
        }
    }

    // Remove SQL comments (`-- comment` and `/* comment */`)
    const cleanedQuery = query
    .replace(/--.*$/gm, "") // Remove inline comments (`-- comment`)
    .replace(/\/\*[\s\S]*?\*\//g, "") // Remove block comments (`/* comment */`)
    .replace(/\n\s*\n/g, "\n") // Remove empty lines
    .trim();

    // If the cleaned query is empty after sanitization, return null
    if (!cleanedQuery.length) {
    return null;
    }

    return cleanedQuery;
};
