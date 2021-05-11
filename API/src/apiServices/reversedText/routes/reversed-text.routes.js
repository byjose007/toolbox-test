import express from 'express'
import { getReversedText } from '../controllers/get-reversed-text.controller'
const router = express.Router()

router.get('/iecho', getReversedText)
export default router
