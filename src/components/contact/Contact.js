import React from 'react'
import '../../styles/contact.css'
import { Container } from '../../styledComponents/Containers'
import { Header2 } from '../../styledComponents/Headers'
import { Paragraph } from '../../styledComponents/Descriptions'

const Contact = () => {
    return (
        <Container>
            <div className='w-100'>
                <Header2>Reach Me At</Header2>
                <Paragraph>
                    <i className='fa fa-phone mr-4'></i>
                    <span>(+91) 9422965894</span>
                </Paragraph>
                <Paragraph>
                    <i className='fa fa-git mr-4'></i>
                    <span>https://github.com/VedantRD</span>
                </Paragraph>
                <Paragraph>
                    <i className='fa fa-google mr-4'></i>
                    <span>vedant.debadwar@gmail.com</span>
                </Paragraph>
            </div>
        </Container>
    )
}

export default Contact;
