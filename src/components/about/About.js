import React from 'react'
import '../../styles/about.css'
import { Header1 } from '../../styledComponents/Headers';

const About = () => {
    return (
        <div className='about-container row no-gutters'>
            <div className='col-6'>
                <Header1>About Me</Header1>
                <p>My name is Vedant Rajesh Debadwar.</p>
                <p>Currently I'm studying in MGM's College Of Engineering,Nanded.</p>
                <p>I'm in Final Year B.tech Computer Science Branch.</p>
            </div>
            <div className='col-6 d-flex justify-content-end'>
                <p className='w-50 bg-secondary text-center'>my Photo</p>
            </div>
        </div>
    )
}

export default About;
