import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'


function Header() {
  return (
    <header className='mainHeader'>
      <NavLink to='/'>
        <img src="../src/images/Logo (2).png" alt="logo" />
      </NavLink>
      <Navbar/>
    </header>
  )
}

export default Header