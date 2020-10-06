import React from 'react'
import '../../styles/skills.css'
import { Header4, Header5 } from '../../styledComponents/Headers';
import { Li, Ul } from '../../styledComponents/Descriptions';

const Skills = () => {
    return (
        <div className='w-100 skills-container'>
            <Header4 className='mb-5'>Skills</Header4>
            <div className='row no-gutters'>
                <div className='col-6 col-md-4'>
                    <Header5>Languages</Header5>
                    <Ul>
                        <Li>Python</Li>
                        <Li>Javascript</Li>
                        <Li>C</Li>
                        <Li>C++</Li>
                        <Li>Java</Li>
                        <Li>C#</Li>
                        <Li>SQL</Li>
                        <Li>PHP</Li>
                    </Ul>
                </div>
                <div className='col-6 col-md-4'>
                    <Header5>Frameworks</Header5>
                    <Ul>
                        <Li>React</Li>
                        <Li>React Native</Li>
                        <Li>Node JS</Li>
                        <Li>Express JS</Li>
                        <Li>Bootstrap</Li>
                        <Li>Blender</Li>
                    </Ul>
                </div>
                <div className='col-6 col-md-4'>
                    <Header5>Tools</Header5>
                    <Ul>
                        <Li>Mongo DB</Li>
                        <Li>MySQL</Li>
                        <Li>Bootstrap</Li>
                        <Li>Blender</Li>
                        <Li>Photoshop</Li>
                        <Li>Git and Github</Li>
                        <Li>Unity</Li>
                    </Ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;
