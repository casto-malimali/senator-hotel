import React from 'react'
import { Carousel, Button } from 'react-bootstrap';

function Slider() {
  return (
    <div className="container-fluid p-0">
    <Carousel fade>
        <Carousel.Item className="active">
            <img className="w-100" src="img/carousel-1.jpg" alt="First slide" />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                    <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                    <Button href="appointment" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="w-100" src="img/carousel-2.jpg" alt="Second slide" />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                    <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                    <Button href="/appointment" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="w-100" src="img/carousel-3.jpg" alt="Third slide" />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                    <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                    <Button href="/appointment" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="w-100" src="img/carousel-4.jpg" alt="Fourth slide" />
            <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                    <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                    <Button href="/appointment" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
  )
}

export default Slider