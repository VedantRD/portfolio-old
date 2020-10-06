import React from 'react'
import '../../styles/contact.css'
import { Header3 } from '../../styledComponents/Headers'
import { Paragraph } from '../../styledComponents/Descriptions'

const Contact = () => {
    return (
        <div className='w-100 contact-container'>
            <div className='row no-gutters w-100'>
                <div>
                    <Header3 className='mb-5'>Reach Me At</Header3>
                    <Paragraph>
                        <i className='fa fa-phone mr-4'></i>
                        <span>(+91) 9422965894</span>
                    </Paragraph>
                    <Paragraph>
                        <i className='fa fa-google mr-4 mb-5'></i>
                        <span>vedant.debadwar@gmail.com</span>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default Contact;
