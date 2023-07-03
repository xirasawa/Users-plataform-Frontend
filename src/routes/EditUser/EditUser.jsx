import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import UserForm from '../../components/UserForm/UserForm'
import { getUser, updateUser } from '../../api/client'

import './EditUser.css'

const EditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [user, setUser] = useState();
  const [name, setName] = useState('')  
  const [city, setCity] = useState('')
  const [avatar, setAvatar] = useState('')
  
  useEffect(() => {
    getUser(id)
    .then(user => {
      setUser(user)
      setName(user.name)
      setCity(user.city)
      setAvatar(user.avatar)
    })
    .catch(error => console.error(error))
  }, [id])
  
  
  const editUser = async (edit) => {
    await updateUser(id, edit)
    
    navigate("/")
  }
  
  return (
    <div className="newUser">
      <h2>Edite os dados do seu usuário:</h2>
        {
          user ? (
            <UserForm
              onSubmit={editUser}
              defaultName={name}
              defaultCity={city}
              defaultAvatar={avatar}
              inputContent= "Editar usuário"
            />
          ) : (
            console.log('fail')
          )
        }
      </div>
      )
    }
    
    export default EditUser
    