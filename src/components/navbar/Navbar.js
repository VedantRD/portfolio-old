import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { NavLi, Text } from '../../styledComponents/Descriptions'
import { Logo } from '../../styledComponents/Buttons'

const Navbar = () => {

    return (
        // <div className='navbar fixed-top'>
        //     <ul className="mx-auto navbar-nav d-inline">
        //         <NavLi className="nav-item">
        //             <Link
        //                 activeClass="active"
        //                 to="home"
        //                 spy={true}
        //                 smooth='easeInOutQuart'
        //                 offset={-70}
        //                 duration={900}
        //                 delay={50}
        //                 className='pb-1'
        //             >
        //                 Home
        //             </Link>
        //         </NavLi>
        //         <NavLi className="nav-item">
        //             <Link
        //                 activeClass="active"
        //                 to="about"
        //                 spy={true}
        //                 smooth='easeInOutQuart'
        //                 offset={-70}
        //                 duration={900}
        //                 delay={50}
        //                 className='pb-1'
        //             >
        //                 About
        //                 </Link>
        //         </NavLi>
        //         <span className='logo'>
        //             <Logo>
        //                 V
        //             </Logo>
        //         </span>
        //         <NavLi className="nav-item">
        //             <Link
        //                 activeClass="active"
        //                 to="projects"
        //                 spy={true}
        //                 smooth='easeInOutQuart'
        //                 offset={-70}
        //                 duration={900}
        //                 delay={50}
        //                 className='pb-1'
        //             >
        //                 Projects
        //                 </Link>
        //         </NavLi>
        //         <NavLi className="nav-item">
        //             <Link
        //                 activeClass="active"
        //                 to="contact"
        //                 spy={true}
        //                 smooth='easeInOutQuart'
        //                 offset={-70}
        //                 duration={900}
        //                 delay={50}
        //                 className='pb-1'
        //             >
        //                 Contact
        //                 </Link>
        //         </NavLi>
        //     </ul>
        // </div>

        // -----------------------------------------------

        <div class="nav fixed-top">
            <ul>
                <NavLi>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth='easeInOutQuart'
                        offset={-70}
                        duration={900}
                        delay={50}
                    >
                        Home
                    </Link>
                </NavLi>
                <NavLi>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth='easeInOutQuart'
                        offset={-70}
                        duration={900}
                        delay={50}
                    >
                        About
                    </Link>
                </NavLi>
                {/* <NavLi> */}
                <div className=' d-inline-flex logo' >
                    <Logo>
                        <Text>V</Text>
                    </Logo>
                </div>
                {/* </NavLi> */}
                <NavLi>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth='easeInOutQuart'
                        offset={-70}
                        duration={900}
                        delay={50}
                    >
                        Projects
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
                        Contact
                    </Link>
                </NavLi>
            </ul>
        </div>
    )
}

export default Navbar
