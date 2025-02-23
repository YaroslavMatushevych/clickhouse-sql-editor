import { Request, Response } from "express";
import { clickhouseClient } from "../config/database";
import { logger } from "../utils/logger";
import { sanitizeSQL } from "../utils/sanitizeSQL";

export const runQuery = async (req: Request, res: Response): Promise<void> => {
    try {
        const { query }: { query?: string } = req.body;

        if (!query) {
            res.status(400).json({ error: "'query' is required" });
            return;
        }

        // Sanitize SQL before execution
        const sanitizedQuery: string | null = sanitizeSQL(query);
        if (!sanitizedQuery) {
            res.status(400).json({ error: "Unsafe SQL detected" });
            return;
        }

        // Split and execute queries separately
        const queries: string[] = sanitizedQuery
            .split(";")
            .map((q) => q.trim())
            .filter((q) => q.length > 0);

        const results: unknown[] = [];

        for (const singleQuery of queries) {
            const resultSet = await clickhouseClient.query({ query: singleQuery, format: "JSONEachRow" });
            const data: unknown = await resultSet.json();
            results.push(data);
        }

        logger.info(`Executed queries: ${queries.join("; ")}`);
        res.json({ rows: results.flat() }); // Merge results into a single response

    } catch (error) {
        logger.error("Query execution failed", error);
        res.status(500).json({ error: "Failed to execute query" });
    }
};
