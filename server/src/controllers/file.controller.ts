import { Request, Response } from "express";
import { clickhouseClient } from "../config/database";
import fs from "fs";
import { logger } from "../utils/logger";
import { sanitizeSQL } from "../utils/sanitizeSQL";

export const uploadFile = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    try {
        // Read SQL file content
        const sqlContent = fs.readFileSync(filePath, "utf8").trim();
        console.log("SQL Content:", sqlContent);

        // Send SQL content back to frontend so it can populate the query editor
        res.json({ message: "File uploaded successfully", sqlContent });
    } catch (error) {
        logger.error("Failed to read SQL file", error);
        res.status(500).json({ error: "Failed to process SQL file" });
    } finally {
        // Clean up the file after processing
        fs.unlinkSync(filePath);
    }
};
