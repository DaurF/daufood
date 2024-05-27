import {createUser, validateUser} from "../../models/users.model.js";

export async function httpSignup(req, res) {
  const {username, email, password} = req.body;

  const userId = await createUser(username, email, password)
  res.status(201).json({username, userId})
}


export async function httpLogin(req, res) {
  const {username, password} = req.body;

  let userId;
  let email;

  try {
    const user = await validateUser(username, password)
    userId = user.userId
    email = user.email
  } catch (err) {
    return res.status(401).json({error: err.message})
  }

  return res.status(201).json({userId, username, email})
}
