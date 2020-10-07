import React from 'react'
import '../../styles/contact.css'
import { Header3 } from '../../styledComponents/Headers'
import { Paragraph } from '../../styledComponents/Descriptions'
import { primaryColor } from '../../utility/Theme'

const Contact = () => {
    return (
        <div className='w-100 contact-container'>
            <div className='row no-gutters w-100'>
                <div className='w-100'>
                    <Header3 className='mb-3'>Reach Me At</Header3>
                    <hr className='w-75 ml-0 mb-5' style={{ backgroundColor: '#fff' }}></hr>
                    <Paragraph>
                        <i className='fa fa-phone mr-3 mr-md-4' style={{ color: primaryColor }}></i>
                        <span>(+91) 9422965894</span>
                    </Paragraph>
                    <Paragraph>
                        <i className='fa fa-envelope mr-3 mr-md-4 mb-5' style={{ color: primaryColor }}></i>
                        <span>vedant.debadwar@gmail.com</span>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default Contact;
