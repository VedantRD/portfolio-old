import React from 'react'
import { Container } from '../../styledComponents/Containers';
import { Paragraph } from '../../styledComponents/Descriptions';
import { Header1, Header5 } from '../../styledComponents/Headers';
import '../../styles/home.css'
const Home = () => {
    return (
        <Container>
            <div>
                <Header5>Hello, I am</Header5>
                <Header1>Vedant Debadwar.</Header1>
                <Header5>Web Developer | Student</Header5>
                <Paragraph>
                    I am greatly influenced by the web technologies and have good experience working with them. Actively looking forward to join a firm where I can contribute to upcoming products and help me to upgrade myself to new level.
                </Paragraph>
                <button className='btn btn-primary px-4 mt-3'>Resume</button>
            </div>
        </Container>
    )
}

export default Home;