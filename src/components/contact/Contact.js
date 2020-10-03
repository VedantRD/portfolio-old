import React from 'react'
import '../../styles/contact.css'
import { Container } from '../../styledComponents/Containers'
import { Header2 } from '../../styledComponents/Headers'
import { Paragraph } from '../../styledComponents/Descriptions'

const Contact = () => {
    return (
        <Container>
            <div className='h-100 row no-gutters align-items-center'>
                <div>
                    <Header2>Reach Me At</Header2>
                    <Paragraph>
                        <div className='row no-gutters justify-content-between'>
                            <span>Icon</span>
                            <span>(+91)9422965894</span>
                        </div>
                    </Paragraph>
                </div>
            </div>
        </Container>
    )
}

export default Contact;
