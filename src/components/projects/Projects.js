import React from 'react'
import '../../styles/project.css'
import { Header3 } from '../../styledComponents/Headers'
import { Container } from '../../styledComponents/Containers';
import Info from './Info';

const Projects = () => {
    return (
        <Container>
            <div className='w-100 pt-5 mt-5'>
                <Header3 className='mb-3'>My Projects</Header3>
                <hr className='w-75 ml-0 mb-5' style={{ backgroundColor: '#fff' }}></hr>
                <Info />
            </div>
        </Container>
    )
}

export default Projects;
