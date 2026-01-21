import React from 'react'
import './Header.css'
import { NavLink } from 'react-router'
export default function Header() {
  return (
    <div>
        <h3>This is a Header</h3>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">mobiles</NavLink>
            <NavLink to="/laptops">laptops</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/users2">Users2</NavLink>
        </nav>
    </div>
  )
}
