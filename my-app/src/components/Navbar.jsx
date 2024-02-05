import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <nav>
       <div className='menuIcon'>
        <ul className='navbar-list'>
            <li>
                <NavLink className={"Navbar-link"} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={"Navbar-link"} to="/About">About</NavLink>
            </li>
            <li>
                <NavLink className={"Navbar-link"} to="/Contact">Contact</NavLink>
            </li>
            <li>
                <NavLink className={"Navbar-link"} to="/Services">Services</NavLink>
            </li>
            <div class="search-container">
           <form action="action">
           <input type="text" placeholder="Search.." name="search" />
           <button type="submit">Submit</button>
           </form>
        </div>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar