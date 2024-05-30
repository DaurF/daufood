import express from "express";
import ordersRouter from './orders/orders.router.js'
import daysOptionsRouter from "./days-options/days-options.router.js";
import authRouter from "./auth/auth.router.js";
import usersRouter from "./users/users.router.js";
import assistantRouter from "./assistant/assistant.router.js";
import groqRouter from "./groq/groq.router.js";

const router = express.Router();

router.use("/orders", ordersRouter);
router.use('/days-options', daysOptionsRouter)
router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/assistant', assistantRouter)
router.use('/groq', groqRouter)

export default router;
