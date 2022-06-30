import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLogOut } from '../hooks/useLogOut'
import {useTheme} from '../hooks/useTheme'

function Navbar() {
    const {color, changeColor} = useTheme()
    const {signOut} = useLogOut()
    return (
        <div>
            <div className="navbar bg-base-100" style={{background: color}}>
                <div className="flex-1">
                    <Link to ="/" className="btn btn-ghost normal-case text-xl">powder ride</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                        <li><NavLink to="/sign-in">Sign In</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li> <button className='btn' onClick={signOut}>Log Out</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar