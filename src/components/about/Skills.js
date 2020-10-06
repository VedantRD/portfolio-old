import React from 'react'
import '../../styles/skills.css'
import { Header3, Header4 } from '../../styledComponents/Headers';
import { Li, Ul } from '../../styledComponents/Descriptions';

const Skills = () => {
    return (
        <div className='w-100'>
            <div className='row no-gutters'>
                <Header4 className='mb-5 mr-4'>My Skills</Header4>
                <hr className='w-50 ml-0 mb-5' style={{ backgroundColor: '#fff' }}></hr>
            </div>
            <div className='row no-gutters'>
                <div className='col-6 col-md-3'>
                    <Header4>Languages</Header4>
                    <Ul>
                        <Li>C</Li>
                        <Li>C++</Li>
                        <Li>Python</Li>
                        <Li>Javascript</Li>
                        <Li>Java</Li>
                        <Li>C#</Li>
                        <Li>SQL</Li>
                        <Li>PHP</Li>
                    </Ul>
                </div>
                <div className='col-6 col-md-3'>
                    <Header4>Frameworks</Header4>
                    <Ul>
                        <Li>React</Li>
                        <Li>React Native</Li>
                        <Li>Node JS</Li>
                        <Li>Express JS</Li>
                        <Li>Django</Li>
                        <Li>JQuery</Li>
                        <Li>Bootstrap</Li>
                    </Ul>
                </div>
                <div className='col-6 col-md-3'>
                    <Header4>Database</Header4>
                    <Ul>
                        <Li>Mongo DB</Li>
                        <Li>MySQL</Li>
                        <Li>Firebase</Li>
                    </Ul>
                    <Header4>Libraries</Header4>
                    <Ul>
                        <Li>Hooks & Redux</Li>
                        <Li>Mongoose</Li>
                        <Li>Native-Base</Li>
                    </Ul>
                </div>
                <div className='col-6 col-md-3'>
                    <Header4>Others</Header4>
                    <Ul>
                        <Li>Blender</Li>
                        <Li>Photoshop</Li>
                        <Li>Git and Github</Li>
                        <Li>Unity</Li>
                        <Li>Android Studio</Li>
                    </Ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;
