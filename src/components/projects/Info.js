import React from 'react'
import { Paragraph } from '../../styledComponents/Descriptions'
import { Header5 } from '../../styledComponents/Headers'
import Carousel from './Carousel'
import { blogie, ebazaar, vdinsta } from './CarouselImages'

const Info = () => {
    return (
        <div className='info'>

            {/* VD Insta */}
            <Header5 className='mb-3'>1. VD Insta</Header5>
            {/* <hr className='w-75 mr-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3 pb-md-5'>
                <div className='col-12 col-md-7'>
                    <Carousel images={vdinsta} />
                </div>
                <div className='col-12 col-md-5 pl-0 pl-md-5'>
                    <Paragraph>
                        Instagram Clone.
                    </Paragraph>
                    <Paragraph>
                        It is social networking site developed using MERN stack. It is currently hosted on Heroku.
                    </Paragraph>
                    <Paragraph>
                        Created its android application using React
                        Native.
                    </Paragraph>
                    <Paragraph>
                        <a href='https://vd-insta.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-external-link'></i>
                        </a>
                    </Paragraph>
                </div>
            </div>

            {/* Farmer Solution */}
            <Header5 className='mb-3 mt-5 text-md-right'>2. Farmer Solutions</Header5>
            {/* <hr className='w-75 mr-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3 pb-md-5 rev-col'>
                <div className='col-12 col-md-5 pr-5'>
                    <Paragraph>
                        Android App
                    </Paragraph>
                    <Paragraph>
                        Android Application developed during SIH 2020 using React Native.
                    </Paragraph>
                    <Paragraph>
                        It is portal for farmers to sell their goods directly to the market. Farmers can find and book the warehouses to store their produce.
                    </Paragraph>
                </div>
                <div className='col-12 col-md-7'>
                    <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' className='img-fluid h-100 w-100' alt='img'></img>
                </div>
            </div>

            {/* Blog Site */}
            <Header5 className='mb-3 mt-5'>3. Blogie</Header5>
            {/* <hr className='w-75 ml-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3 pb-md-5'>
                <div className='col-12 col-md-7'>
                    <Carousel images={blogie} />
                </div>
                <div className='col-12 col-md-5 pl-0 pl-md-5'>
                    <Paragraph>
                        Blog Site
                    </Paragraph>
                    <Paragraph>
                        It is blogging site developed using MERN stack. Currently hosted on Heroku.
                    </Paragraph>
                    <Paragraph>
                        Created its android application using React
                        Native.
                    </Paragraph>
                    <Paragraph>
                        <a href='https://vd-insta.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                            <i className='fa fa-external-link'></i>
                        </a>
                    </Paragraph>
                </div>
            </div>

            {/* E commerce */}
            <Header5 className='mb-3 mt-5 text-md-right'>4. E-Bazaar</Header5>
            {/* <hr className='w-75 mr-0 mb-5' style={{ backgroundColor: '#fff' }}></hr> */}
            <div className='row no-gutters align-items-center pb-3 rev-col'>
                <div className='col-12 col-md-5 pr-5'>
                    <Paragraph>
                        E-Commerce Website
                    </Paragraph>
                    <Paragraph>
                        Android Application developed during SIH 2020 using React Native.
                    </Paragraph>
                    <Paragraph>
                        It is portal for farmers to sell their goods directly to the market. Farmers can find and book the warehouses to store their produce.
                    </Paragraph>
                </div>
                <div className='col-12 col-md-7'>
                    <Carousel images={ebazaar} />
                </div>
            </div>

        </div>
    )
}

export default Info
