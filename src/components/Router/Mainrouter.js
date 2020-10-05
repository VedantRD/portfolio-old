import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Projects from '../projects/Projects'

const Mainrouter = () => {
    return (
        <>
            <div id='home'>
                <Home />
            </div>
            <div id='about'>
                <About />
            </div>
            <div id='projects'>
                <Projects />
            </div>
            <div id='contact'>
                <Contact />
            </div>
        </>
    )
}

export default Mainrouter
