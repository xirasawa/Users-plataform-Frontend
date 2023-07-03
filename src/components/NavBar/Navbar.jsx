import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navBar">
      <h2>
        <Link to={'/'}>Usuários</Link>
      </h2>
      <ul>
        <li>
          <Link to={'/'}>Início</Link>
        </li>
        <li>
          <Link to={'/new-user'} className="newUserbutton">Novo usuário</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
