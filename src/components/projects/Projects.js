import React from 'react'
import '../../styles/project.css'
import { Header1 } from '../../styledComponents/Headers'

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='row h-100 align-items-center'>
                <div>
                    <Header1>My Projects</Header1>
                    <ul>
                        <li>Social Networking Site</li>
                        <li>Blog Site</li>
                        <li>E-commerce Site</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;
