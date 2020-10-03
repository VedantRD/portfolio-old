import React from 'react'
import '../../styles/skills.css'
import { Header1 } from '../../styledComponents/Headers';

const Skills = () => {
    return (
        <div className='skills-container'>
            <Header1>My Skills</Header1>
            <div className='row no-gutters'>
                <div className='col-3'>
                    <h4>Languages</h4>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>C#</li>
                        <li>SQL</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h4>Frameworks</h4>
                    <ul>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Django</li>
                        <li>Express</li>
                        <li>Django</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h4>Database</h4>
                    <ul>
                        <li>Mongo DB</li>
                        <li>MySQL</li>
                        <li>Firebase</li>
                    </ul>
                    <h4>Libraries</h4>
                    <ul>
                        <li>Hooks & Redux</li>
                        <li>Mongoose</li>
                        <li>Native-Base</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h4>Other</h4>
                    <ul>
                        <li>Blender</li>
                        <li>Photoshop</li>
                        <li>Git-Github</li>
                        <li>Unity</li>
                        <li>Android Studio</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;
