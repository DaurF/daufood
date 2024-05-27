import express from "express";
import {httpLogin, httpSignup} from "./auth.controller.js";

const router = express.Router()

router.post('/signup', httpSignup)
router.post('/login', httpLogin)

export default router;
