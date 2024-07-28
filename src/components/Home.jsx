import React from 'react'
import { Carousel, Button } from 'react-bootstrap';
import Spinner from './layouts/Spinner'
import Service from './sub-components/Service'
import Offer from './sub-components/Offer';
import Pricing from './sub-components/Pricing';


function Home() {
  return (
    <div>
      
      <Spinner />
      <div className="container-fluid p-0">
            <Carousel fade>
                <Carousel.Item className="active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="First slide" />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                            <Button href="appointment.html" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src="img/carousel-2.jpg" alt="Second slide" />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                            <Button href="appointment.html" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src="img/carousel-3.jpg" alt="Third slide" />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                            <Button href="appointment.html" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src="img/carousel-4.jpg" alt="Fourth slide" />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="display-1 text-white mb-md-1 animated zoomIn">Welcome To Senator Hotel Arusha</h4>
                            <Button href="appointment.html" className="btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Book Now</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div> 
        {/* About  */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="section-title mb-4">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                            <h1 className="display-5 mb-0">Senator Hotel Arusha</h1>
                        </div>
                        <p className="mb-4">
                            Senator hotel Arusha is approximately 3 minutes drive from the Arusha bus terminal station and 30 minutes (45km) from Kilimanjaro
                            international airport and 10 minutes from Domestic airport (Arusha Airport). Apart from that we have different services: free wifi internet access is
                            available to all guests, secure parking is available inside the hotel, 27 comfortable rooms equipped with an array of modern and cultural amenities to
                            ensure your pleasant stay. Airport transfer and shuttle service available at the hotel, 24 hours customer service support. Simanjiro 
                            restaurant with experienced chefs are connoisseurs of cuisine from across the world: Continental, Italian, French, Burger, Pizza, Seafood, Vegetarian foods, and finest Indian cuisine in Tanzania.
                            Laundry/Drycleaner service is available to take care of the guests' clothes wishing to stay up to date with current news have an opportunity to use the daily newspaper and delivery services.
                        </p>
                    </div>
                    <div className="col-lg-6 xxl-4" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{ objectFit: 'cover' }} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Appointment Section */}
        <div className="container-fluid bg-primary my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-12 py-5">
                        <img src="img/amenites.png" alt="Amenities" width="100%" />
                    </div>
                </div>
            </div>
        </div>

        {/* Room service sction  */}
        
        <Service />
        <Offer />
        <Pricing />
    
    
    </div>
  )
}

export default Home