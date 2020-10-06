import React from 'react'
import '../../styles/project.css'
import { Header3 } from '../../styledComponents/Headers'
import { Li, Ul } from '../../styledComponents/Descriptions'
import { Container } from '../../styledComponents/Containers';

const Projects = () => {
    return (
        <Container>
            <div className='w-100'>
                <Header3 className='mb-5'>My Projects</Header3>
                <Ul>
                    <Li>VD Insta</Li>
                    <Li>Blog Site</Li>
                    <Li>E-Bazaar</Li>
                </Ul>
            </div>
        </Container>
    )
}

export default Projects;
