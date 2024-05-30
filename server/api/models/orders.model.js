import {pool} from "../services/mysql.js";

async function getAllOrders() {
  const [orders] = await pool.query("SELECT o.*, u.username FROM orders o INNER JOIN users u ON o.user_id = u.id");
  return orders;
}

async function createOrder(order) {
  const {
    user_id,
    phone,
    address,
    delivery_time,
    preferences,
    comment,
    pay_method,
    kaspi_phone,
    plan,
    plan_code,
    calories,
    price
  } = order

  const [res] = await pool.query(`INSERT INTO orders (user_id, phone, address, delivery_time, preferences, comment, pay_method, kaspi_phone, plan, plan_code, calories, price)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [user_id, phone, address, delivery_time, preferences, comment, pay_method, kaspi_phone, plan, plan_code, calories, price])

  return res.insertId
}

async function getOrdersByUserId(userId) {
  const [orders] = await pool.query('SELECT * FROM orders WHERE user_id = ?', [userId])
  return orders
}

async function confirmOrder(orderId) {
  await pool.query('UPDATE orders SET confirmed = 1 WHERE id = ?', [orderId])
}

export {getAllOrders, createOrder, getOrdersByUserId, confirmOrder}
