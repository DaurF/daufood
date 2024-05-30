import express from 'express'
import {httpConvertToFormat} from "./groq.controller.js";

const router = express.Router();

router.post('/', httpConvertToFormat)

export default router;
