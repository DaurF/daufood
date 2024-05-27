import {pool} from "../services/mysql.js";

async function getAllOrders() {
  const [orders] = await pool.query("SELECT * FROM orders");
  return orders;
}

export {getAllOrders}
