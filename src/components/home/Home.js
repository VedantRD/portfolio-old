import React from 'react'
import { Container } from '../../styledComponents/Containers';
import { Paragraph } from '../../styledComponents/Descriptions';
import { Header1, Header4 } from '../../styledComponents/Headers';
import '../../styles/home.css'
const Home = () => {
    return (
        <Container>
            <div className='h-100 row no-gutters align-items-center'>
                <div>
                    <Header4>Hi,</Header4>
                    <Header1>I'm Vedant Debadwar.</Header1>
                    <Header4>Web Developer / Game Developer</Header4>
                    <Paragraph>
                        Specialized in designing awesome Websites, Apps and Games. Specialized in designing awesome Websites, Apps and Games
                    </Paragraph>
                </div>
            </div>
        </Container>
    )
}

export default Home;