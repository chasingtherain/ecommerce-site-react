import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link to ="/" className="btn btn-ghost normal-case text-xl">powder ride</Link>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
       
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar