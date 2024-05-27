import express from "express";
import {httpGetAllOrders} from "./orders.controller.js";

const router = express.Router();

router.get('/', httpGetAllOrders)

export default router;
