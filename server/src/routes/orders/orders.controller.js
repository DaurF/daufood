import {getAllOrders} from "../../models/orders.model.js";

async function httpGetAllOrders(req, res) {
  const orders = await getAllOrders()
  return res.status(200).json(orders)
}

export {httpGetAllOrders}
