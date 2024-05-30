import express from 'express';
import {httpCallAssistant} from "./assistant.controller.js";

const router = express.Router();

router.get('/:agentId', httpCallAssistant)

export default router;
