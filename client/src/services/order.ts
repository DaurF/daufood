import {http} from "../shared/api";

export async function makeOrder(order) {
  const response = await http.post('/orders', order)

  if (response.status !== 201) {
    throw new Error('Error while making an order')
  }

  return response.data.orderId
}

export async function fetchOrdersByUserId(userId) {
  const response = await http.get(`/orders/${userId}`)

  if (response.status !== 200) {
    throw new Error('Error while fetching orders')
  }

  return response.data.orders
}

export async function fetchOrders() {
  const response = await http.get(`/orders`)

  if (response.status !== 200) {
    throw new Error('Error while fetching orders')
  }

  return response.data.orders
}

export async function approveOrder(orderId) {
  const response = await http.patch(`/orders/${orderId}`)

  if (response.status !== 204) {
    throw new Error('Error while fetching orders')
  }

  return response.data
}
