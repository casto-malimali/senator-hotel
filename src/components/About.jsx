import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
         {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
            <div className="modal-header border-0">
              <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: '600px' }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}

      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">About Us</h1>
            <Link to="/" className="h4 text-white">Home</Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/contact" className="h4 text-white">About Us</Link>
          </div>
        </div>
      </div>
      {/* Hero End */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title mb-4">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                            <h1 className="display-5 mb-0">Introducing</h1>
                        </div>
                        <h4 className="text-body fst-italic mb-4">WELCOME TO SENATOR HOTEL ARUSHA</h4>
                        <p className="mb-4">
                            Located in Arusha, an oasis of tranquility on Tanzania's gateway to major tourist destinations regardless of the season, the hotel 
                            comprises 90 well-appointed guest rooms and suites, 1 restaurant, 24-hour In-Room Dining service. Senator Hotel provides the perfect
                            venue for meetings with more than 10 sqm of meeting and banquet space, cocktail events, and corporate dinners, an ideal mix of categories to
                            meet the needs of corporate and MICE visitors to the country. The property offers uninterrupted views of Mount Meru, the second-highest mountain
                            in Tanzania, after Mount Kilimanjaro.
                            Senator Hotel Arusha is approximately 3 minutes drive from the Arusha bus terminal station and 30 minutes (45km) from Kilimanjaro International 
                            Airport and 10 minutes from Domestic Airport (Kisongo Airport). Apart from that, we have different services: Free wifi internet access is available
                            to all guests, secure parking is available inside the hotel, 34 comfortable rooms equipped with an array of modern and cultural amenities to ensure your pleasant stay. Airport transfer and shuttle service are available at the hotel, 24 hours customer service support. Simanjiro restaurant with experienced chefs who are connoisseurs of cuisine from across the world: Continental, Italian, French, Burger, Pizza, Seafood, Vegetarian foods, and the finest Indian cuisine in Tanzania. Laundry/Drycleaner service 
                            is available to take care of the guests' clothes wishing to stay up to date with current news have an opportunity to use the daily newspaper and delivery services.
                        </p>
                    </div>
                    <div className="col-lg-5" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about-2.webp" style={{ objectFit: 'cover' }} alt="About" />
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            
                                <img src="img/senator-hotel.jpg" alt="" className="img-fluid" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
