import {getUserById} from "../../models/users.model.js";

export async function httpGetUser(req, res) {
  const userId = Number(req.params.id)

  const {username, email} = await getUserById(userId);

  res.status(200).json({userId, username, email})
}
