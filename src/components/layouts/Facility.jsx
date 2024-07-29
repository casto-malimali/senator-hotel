import React from 'react'

function Facility() {
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
                        <h1 className="display-3 text-white animated zoomIn">Our Facility</h1>
                        <a href="" className="h4 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="" className="h4 text-white">Our Facility</a>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* Service Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-12">
                            <div className="section-title mb-5">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">Senator Hotel</h5>
                                <h1 className="display-5 mb-0">We Have Some Facilities</h1>
                            </div>
                            <div className="row g-5">
                                <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.6s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="img/1.jpg" alt="Reception" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Reception</h5>
                                        <p>
                                            Our hotel has a stylish reception that attracts many of our arriving guests.
                                            While at the reception area, they will feel more comfortable and secure due to our excellent customer service,
                                            which encourages guests to return. We have 24-hour front desk support to assist guests with any inquiries during their stay.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.9s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="img/2.jpg" alt="Restaurant" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Restaurant</h5>
                                        <p>
                                            In the Maasai restaurant, our guests can eat, drink, and feel energized and powerful.
                                            The menu features a wide selection of high-quality teas, juices, and coffees.
                                            The breakfast buffet is served here every morning, and for a stylish dinner, the restaurant offers excellent options.
                                            Our experienced chefs are connoisseurs of cuisine from around the world, offering African, Continental, Italian, French, and the finest Indian cuisine in Tanzania.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.9s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="img/4.jpg" alt="Laundry and Dry Cleaner" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Laundry and Dry Cleaner</h5>
                                        <p>
                                            The hotel offers laundry and dry cleaning services to our guests, provided by our professional hotel staff.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 service-item wow zoomIn" data-wow-delay="0.9s">
                                    <div className="rounded-top overflow-hidden">
                                        <img className="img-fluid" src="img/3.jpg" alt="Parking" />
                                    </div>
                                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                                        <h5 className="m-0">Parking</h5>
                                        <p>
                                            Our guests will feel comfortable with our spacious parking area inside the hotel, which includes full guidance and camera security.
                                            Nearby the hotel, there is also a modern car wash.
                                        </p>
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

export default Facility
