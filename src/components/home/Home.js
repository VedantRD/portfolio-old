import React from 'react'
import { Container } from '../../styledComponents/Containers';
import { Paragraph } from '../../styledComponents/Descriptions';
import { Header1, Header4 } from '../../styledComponents/Headers';
import '../../styles/home.css'
const Home = () => {
    return (
        <Container>
            <div>
                <Header4>Hello, I am</Header4>
                <Header1>Vedant Debadwar.</Header1>
                <Header4>Web Developer | Student</Header4>
                <Paragraph>
                    I am greatly influenced by the web technologies and have good experience working with them. Actively looking forward to join a firm where I can contribute to upcoming products and help me to upgrade myself to new level.
            </Paragraph>
                <button className='btn btn-primary px-4 mt-3'>Resume</button>
            </div>
        </Container>
    )
}

export default Home;