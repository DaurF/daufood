import {http} from "../shared/api";

export async function getUser(id) {
  const response = await http.get(`/users/${id}`)

  if (response.status !== 200) {
    throw new Error("User not found")
  }

  return response.data
}
