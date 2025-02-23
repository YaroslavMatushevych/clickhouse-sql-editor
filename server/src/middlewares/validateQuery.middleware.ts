import { Request, Response, NextFunction } from 'express';

export const validateQuery = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.query) {
        return res.status(400).json({ error: "SQL query is required" });
    }
    next();
};
