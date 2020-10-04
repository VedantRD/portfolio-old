import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { scroller, Link } from 'react-scroll'

const Navbar = () => {

    const scrollTo = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            {/* <img src={logo} style={{width:150,height:60}} alt={logo}></img> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/" onClick={() => scrollTo('home')}>
                            <i className='fa fa-home'></i> Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/about" onClick={() => scrollTo('about')}>
                            <i className='fa fa-user'></i> About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="menu_active" className="nav-link" to="/contact" onClick={() => scrollTo('contact')}>
                            <i className='fa fa-envelope'></i> Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/projects" onClick={() => scrollTo('projects')}>
                            <i className='fa fa-cog'></i> Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/skills" onClick={() => scrollTo('skills')}>
                            <i className='fa fa-wrench'></i> Skills
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
