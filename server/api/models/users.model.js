import {pool} from "../services/mysql.js";

export async function createUser(username, email, password) {
  const response = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password])
  const [user] = response
  return user.insertId
}

export async function validateUser(username, password) {
  const [users] = await pool.query('SELECT * FROM users WHERE username = ?', [username])

  if (!users.length) {
    throw new Error(`User with username ${username} does not exist`)
  }

  if (users[0].password !== password) {
    throw new Error('Password is incorrect')
  }

  return {userId: users[0].id, email: users[0].email}
}

export async function getUserById(id) {
  const [response] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
  return response[0]

}
