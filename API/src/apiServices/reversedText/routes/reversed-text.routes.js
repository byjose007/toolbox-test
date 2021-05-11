import express from 'express';
import {getReversedText } from '../controllers/get-reversed-text.controller';
const router = express.Router();


router.post('/reversed-text', getReversedText);

export default router;