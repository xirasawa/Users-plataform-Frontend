import axios from 'axios'

const url = 'http://localhost:5500/user'

async function getUsers() {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    if (!error.response) {
      throw new Error(
        'Não foi possível conectar com a API. Tente novamente em alguns instantes.'
      )
    }
    throw error
  }
}

async function getUser(id) {
  return await axios
    .get(`${url}/${id}`)
    .then(response => response.data)
    .catch(error => console.error(error))
}

async function addNewUser(addUser) {
  await axios.post(url, addUser).catch(error => console.error(error))
}

async function updateUser(id, update) {
  await axios.put(`${url}/${id}`, update).catch(error => console.error(error))
}

async function deleteUser(id) {
  await axios.delete(`${url}/${id}`).catch(error => console.error(error))
}

export { getUsers, getUser, addNewUser, updateUser, deleteUser }
