import React from 'react'
import { useNavigate } from 'react-router-dom'

import UserForm from '../../components/UserForm/UserForm'
import { addNewUser } from '../../api/client'

import './NewUser.css'

const NewUser = () => {
  const navigate = useNavigate()

  const createPost = async (post) => {
    await addNewUser(post)

    navigate("/")
  }

  return (
    <div className="newUser">
      <h2>Adicione um novo usuário:</h2>
      <UserForm onSubmit={createPost} inputContent= "Criar usuário" />
    </div>
  )
}

export default NewUser
