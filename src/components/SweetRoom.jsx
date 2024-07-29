import React from 'react'

function SweetRoom() {
  return (
    <div>
      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen" style={{ height: '159%' }}>
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
                        <h1 className="display-3 text-white animated zoomIn">Sweet Room</h1>
                        <a href="#" className="h4 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="#" className="h4 text-white">Sweet Room</a>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Service Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: '400px' }}>
                            <img className="img-fluid" src="img/Xc.jpg" alt="Sweet Room" />
                            <h6 className="display-6 mb-0">Sweet Room</h6>
                            <p>Balcony, fan, refrigerator, hair dryer, Jacuzzi, air condition, LCD, internet connection, coffee maker in the rooms, telephone and shower/toilet, bath tub, bath/toilet.</p>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title mb-5">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">Senator Hotel</h5>
                                <h1 className="display-5 mb-0">We Offer Fair Prices for Our Rooms</h1>
                            </div>
                            <div className="row g-5">
                                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="img/service-1.jpg" alt="Single Standard Rooms" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <a href="#"><h5 className="m-0">Single Standard Rooms</h5></a>
                                    </div>
                                </div>
                                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="img/service-2.jpg" alt="Suite Room" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <a href="#"><h5 className="m-0">Suite Room</h5></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
    </div>
  )
}

export default SweetRoom
