import express from "express";
import {httpApproveOrder, httpCreateOrder, httpGetAllOrders, httpGetOrdersByUserId} from "./orders.controller.js";

const router = express.Router();

router.get('/', httpGetAllOrders)
router.post('/', httpCreateOrder)
router.get('/:userId', httpGetOrdersByUserId)
router.patch('/:orderId', httpApproveOrder)

export default router;
