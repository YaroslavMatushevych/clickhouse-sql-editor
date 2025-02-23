import express from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/file.controller';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadFile);

export default router;
