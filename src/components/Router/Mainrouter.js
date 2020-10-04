import React from 'react'
// import { Route, Switch } from 'react-router-dom'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

const Mainrouter = () => {
    return (
        // <Switch>
        //     <Route exact path='/' component={Home}></Route>
        //     <Route path='/about' component={About}></Route>
        //     <Route path='/contact' component={Contact}></Route>
        //     <Route path='/projects' component={Projects}></Route>
        //     <Route path='/skills' component={Skills}></Route>
        // </Switch>
        <>
            <div id='home'>
                <Home />
            </div>
            <div id='about'>
                <About />
            </div>
            <div id='contact'>
                <Contact />
            </div>
            <div id='projects'>
                <Projects />
            </div>
            <div id='skills'>
                <Skills />
            </div>
        </>
    )
}

export default Mainrouter