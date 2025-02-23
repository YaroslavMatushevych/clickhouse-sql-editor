import express from 'express';
import { runQuery } from '../controllers/query.controller';
import { validateQuery } from '../middlewares/validateQuery.middleware';

const router = express.Router();

router.post('/query', validateQuery, runQuery);

export default router;
