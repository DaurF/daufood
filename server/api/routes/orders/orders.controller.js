import {confirmOrder, createOrder, getAllOrders, getOrdersByUserId} from "../../models/orders.model.js";

async function httpGetAllOrders(req, res) {
  const orders = await getAllOrders()
  return res.status(200).json({orders})
}

async function httpCreateOrder(req, res) {
  const orderId = await createOrder(req.body)
  return res.status(201).json({orderId})
}

async function httpGetOrdersByUserId(req, res) {
  const orders = await getOrdersByUserId(req.params.userId)
  return res.status(200).json({orders})
}

async function httpApproveOrder(req, res) {
  await confirmOrder(req.params.orderId)
  return res.status(204).json({})
}



export {httpGetAllOrders, httpCreateOrder, httpGetOrdersByUserId, httpApproveOrder}
