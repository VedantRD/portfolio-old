import React from 'react'
import '../../styles/project.css'
import { Header2 } from '../../styledComponents/Headers'
import { Li, Ul } from '../../styledComponents/Descriptions'
import { Container } from '../../styledComponents/Containers';

const Projects = () => {
    return (
        <Container>
            <div className='row h-100 align-items-center'>
                <div>
                    <Header2>My Projects</Header2>
                    <Ul>
                        <Li>Social Networking Site</Li>
                        <Li>Blog Site</Li>
                        <Li>E-commerce Site</Li>
                    </Ul>
                </div>
            </div>
        </Container>
    )
}

export default Projects;
