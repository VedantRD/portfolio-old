import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div div className='row justify-content-center no-gutters footer pb-5' >
            <div className='col-3 col-md-2 justify-content-center align-self-end text-center'>
                <a href='https://github.com/VedantRD' target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-2x fa-github'></i>
                </a>
            </div>
            <div className='col-3 col-md-2 justify-content-center align-self-end text-center'>
                <a href='https://github.com/VedantRD' target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-2x fa-linkedin-square'></i>
                </a>
            </div>
            <div className='col-3 col-md-2 justify-content-center align-self-end text-center'>
                <a href='https://github.com/VedantRD' target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-2x fa-instagram'></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
