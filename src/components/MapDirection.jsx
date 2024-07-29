import React from 'react'

function MapDirection() {
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
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
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
                        <h1 className="display-3 text-white animated zoomIn">Map & Direction</h1>
                        <a href="#" className="h4 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="#" className="h4 text-white">Map & Direction</a>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* About Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Direction</h5>
                                <h2 className="display-7 mb-0">REDIRECT your GPS</h2>
                            </div>
                            <h4 className="text-body fst-italic mb-4">WELCOME TO SENETOR HOTEL ARUSHA</h4>
                            <p className="mb-4">
                                It would be our pleasure to accommodate you. The Senetor Hotel is situated in the tranquil green area of the Makao Mapya, Arusha. The city centre & main business areas are all located nearby and the Kilimanjaro International airport is conveniently situated 55 kilometres from the hotel on the outskirts of the city. Arusha also sports an airport for local travel requirements. Follow the road from the airport until you get to a cross-junction.
                                Turn left at the slipway onto the Nemang Road - Nairobi road towards Arusha. Follow the road for about 44km where you will find Senetor Hotel on left hand side.
                            </p>
                        </div>
                        <div className="col-lg-12" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <div className="card h-200 hvr-shadow">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40145.48119603762!2d36.69238504756345!3d-3.3657600326803996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371dd02230561d%3A0x4ee3acc3c7935ade!2sSenator%20Hotel!5e0!3m2!1sen!2stz!4v1656516350473!5m2!1sen!2stz"
                                        style={{ border: 0, height: '550px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
    </div>
  )
}

export default MapDirection
