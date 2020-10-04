import React from 'react'
import '../../styles/about.css'
import { Header2 } from '../../styledComponents/Headers';
import { Paragraph } from '../../styledComponents/Descriptions';
import MyImg from '../../assets/resume2.jpg'

const About = () => {
    return (
        <div className='about-container row no-gutters'>
            <div className='col-9'>
                <Header2 className='mb-5'>About Me</Header2>
                <Paragraph>My name is Vedant Rajesh Debadwar.</Paragraph>
                <Paragraph>Currently I'm studying in MGM's College Of Engineering,Nanded.</Paragraph>
                <Paragraph>I'm in Final Year B.tech Computer Science Branch.</Paragraph>
            </div>
            <div className='col-3 d-flex justify-content-end'>
                <img src={MyImg} className='w-100 h-100' alt='my img'></img>
            </div>
        </div>
    )
}

export default About;
