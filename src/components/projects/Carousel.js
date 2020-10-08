import React from 'react'

const Carousel = ({ images }) => {

    console.log(images)

    return (
        <div>
            <div id='carouselExampleIndicators' className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 h-100" src={images[0].path} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 h-100" src={images[1].path} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 h-100" src={images[2].path} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 h-100" src={images[3].path} alt="Fourth slide" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
