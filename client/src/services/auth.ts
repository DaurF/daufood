import {http} from "../shared/api";

async function signup(username, email, password) {
  const response = await http.post('/auth/signup', {
    username, email, password
  });

  if (response.status !== 201) {
    console.log(response)
    throw new Error('Random error')
  }

  return response.data.userId
}

async function login(username, password) {
  const response = await http.post('/auth/login', {
    username, password
  })

  if (response.status !== 201) {
    throw new Error("Username or password is incorrect")
  }

  return response.data
}

export {signup, login}
