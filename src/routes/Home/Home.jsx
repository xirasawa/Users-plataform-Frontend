import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getUsers, deleteUser } from '../../api/client'

import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'

import './Home.css'

const Home = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [shouldUpdate, setShouldUpdate] = useState(false)
  
  useEffect(() => {
    getUsers()
    .then(users => {
      setUsers(users)
      setError(null)
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    })
  }, [shouldUpdate]);

  const toDelete = async (id) => {
    await deleteUser(id)
    setShouldUpdate(!shouldUpdate)
  }
  
    return (
    <div className="home">
      <h2 className="usersText">Usuários:</h2>
      <ul className="cards">
        <li>
          {
            users && users.length ? (
              users.map(({ id, avatar, name, city }) => (
                <div key={id} className="card">
                  <div className="userContent">
                    <img src={avatar} alt="foto do usuário" />
                    <div className="textContent">
                      <h2 className="name">{name}</h2>
                      <div className="city">{city}</div>
                    </div>
                  </div>
                  <div className="configIcons">
                    <Link to={`/edit-user/${id}`}>
                      <img src={edit} alt="Ícone de lixo" className="editIcon" />
                    </Link>
                    <Link onClick={() => toDelete(id)}>
                      <img src={trash} alt="Ícone de lixo" className="trashIcon" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              error ? (
                <div className="noUsers">
                  <h3>{error}</h3>
                </div>
              ) : (
                <div className="noUsers">
                  <h3>Nenhum usuário encontrado</h3>
                  <Link to={'/new-user'} className="newUserbutton">Adicione um usuário</Link>
                </div>
              )
            )
          }
        </li>
      </ul>
    </div>
  )
}

export default Home
