import React from 'react'
import { Container } from '../../styledComponents/Containers';
import { Paragraph } from '../../styledComponents/Descriptions';
import { Header1, Header5 } from '../../styledComponents/Headers';
import { PrimaryButton } from '../../styledComponents/Buttons';
import '../../styles/home.css'
import { faintColor } from '../../utility/Theme';
const Home = () => {
    return (
        <Container>
            <div>
                <Header5>Hello, I am</Header5>
                <Header1>Vedant Debadwar.</Header1>
                <h3 style={{ color: faintColor }}>Web Developer | Student</h3>
                <Paragraph>
                    I am greatly influenced by the web technologies and have good experience working with them. Actively looking forward to join a firm where I can contribute to upcoming products and help me to upgrade myself to new level.
                </Paragraph>
                <PrimaryButton className='mt-2'>Resume</PrimaryButton>
            </div>
        </Container>
    )
}

export default Home;