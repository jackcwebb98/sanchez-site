import axios from 'axios'

export async function checkUser() {
  let user = await axios.get(`/getuser`)
  return user
}