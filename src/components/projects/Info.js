import React from 'react'
import { Paragraph } from '../../styledComponents/Descriptions'
import { Header5 } from '../../styledComponents/Headers'

const Info = () => {
    return (
        <div>

            {/* VD Insta */}
            <Header5 className='mb-3'>1. VD Insta</Header5>
            {/* <hr className='w-75 mr-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3'>
                <div className='col-12 col-md-6'>
                    <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' className='img-fluid h-100 w-100' alt='img'></img>
                </div>
                <div className='col-12 col-md-6 pl-0 pl-md-5'>
                    <Paragraph>
                        Instagram Clone.
                    </Paragraph>
                    <Paragraph>
                        It is social networking site developed using MERN stack. It is currently hosted on Heroku. Created its android application using React
                        Native.
                    </Paragraph>
                    <Paragraph>
                        Link - https://vd-insta.herokuapp.com/
                    </Paragraph>
                </div>
            </div>

            {/* Farmer Solution */}
            <Header5 className='mb-3 mt-5 text-md-right'>2. Farmer Solutions</Header5>
            {/* <hr className='w-75 mr-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3 rev-col'>
                <div className='col-12 col-md-6 pr-5'>
                    <Paragraph>
                        Android App for farmers
                    </Paragraph>
                    <Paragraph>
                        It is social networking site developed using MERN stack. It is currently hosted on Heroku. Created its android application using React
                        Native.
                    </Paragraph>
                    <Paragraph>
                        Link - https://vd-insta.herokuapp.com/
                    </Paragraph>
                </div>
                <div className='col-12 col-md-6'>
                    <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' className='img-fluid h-100 w-100' alt='img'></img>
                </div>
            </div>

            {/* Blog Site */}
            <Header5 className='mb-3 mt-5'>3. Blogie</Header5>
            {/* <hr className='w-75 ml-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3'>
                <div className='col-12 col-md-6'>
                    <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' className='img-fluid h-100 w-100' alt='img'></img>
                </div>
                <div className='col-12 col-md-6 pl-0 pl-md-5'>
                    <Paragraph>
                        Blog Site
                    </Paragraph>
                    <Paragraph>
                        It is blogging site developed using MERN stack. It is currently hosted on Heroku. Created its android application using React
                        Native.
                        </Paragraph>
                    <Paragraph>
                        Link - https://vd-insta.herokuapp.com/
                    </Paragraph>
                </div>
            </div>

        </div>
    )
}

export default Info
