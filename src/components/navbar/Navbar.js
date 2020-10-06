import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { NavLi } from '../../styledComponents/Descriptions'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-auto">
                    <NavLi className="nav-item">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth='easeInOutQuart'
                            offset={-70}
                            duration={900}
                            delay={50}
                        >
                            <i className='fa fa-home'></i> Home
                        </Link>
                    </NavLi>
                    <NavLi className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth='easeInOutQuart'
                            offset={-70}
                            duration={900}
                            delay={50}
                        >
                            <i className='fa fa-user'></i> About
                        </Link>
                    </NavLi>
                    <NavLi className="nav-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth='easeInOutQuart'
                            offset={-70}
                            duration={900}
                            delay={50}
                        >
                            <i className='fa fa-cog'></i> Projects
                        </Link>
                    </NavLi>
                    <NavLi className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth='easeInOutQuart'
                            offset={-70}
                            duration={900}
                            delay={50}
                        >
                            <i className='fa fa-envelope'></i> Contact
                        </Link>
                    </NavLi>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
