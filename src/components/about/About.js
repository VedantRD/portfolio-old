import React from 'react'
import '../../styles/about.css'
import { Header3 } from '../../styledComponents/Headers';
import { Paragraph } from '../../styledComponents/Descriptions';
import MyImg from '../../assets/resume2.jpg'
import Education from './Education';
import Skills from './Skills';
import { Container } from '../../styledComponents/Containers';

const About = () => {
    return (
        <Container>
            <div className='w-100'>
                <div className='row'>
                    <div className='col-12 col-md-9'>
                        <Header3 className='mb-5'>About Me</Header3>
                        <Paragraph>I'm Vedant Rajesh Debadwar.</Paragraph>
                        <Paragraph>Final year Computer Science B.tech student studying in MGM's College Of Engineering,Nanded.</Paragraph>
                        <Paragraph>I'm in Final Year B.tech Computer Science Branch.</Paragraph>
                    </div>
                    <div className='col-12 col-md-3 d-flex align-items-center justify-content-center py-5'>
                        <img src={MyImg} height={200} width={200} style={{ borderRadius: 100 }} alt='my img'></img>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <Header3 className='mb-5'>Education</Header3>
                    </div>
                    <div className='col-12'>
                        <Education />
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <Skills />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About;
