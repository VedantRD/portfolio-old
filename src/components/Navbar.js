import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            {/* <img src={logo} style={{width:150,height:60}} alt={logo}></img> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact className="nav-link" to="/skills">Skills</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
