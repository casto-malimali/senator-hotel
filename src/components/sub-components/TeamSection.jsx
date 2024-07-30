import React from 'react';

const TeamSection = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="section-title mb-5">
                        <center>
                            <h4 className="position-relative d-inline-block text-primary text-uppercase">
                                LAVISHLY DECORATED ROOMS IN THE HEART OF ARUSHA.
                            </h4>
                            <h6 className="display-7 mb-0">
                                Unwind in our beautifully appointed guestrooms whether traveling for business or leisure
                                with all the facilities of a contemporary luxury hotel with a concoction of your choice ...
                            </h6>
                        </center>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                                <img className="img-fluid rounded-top w-100" src="img/ARUSHATS.jpg" alt="Test of Arusha" />
                            </div>
                            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                <h4 className="mb-2">TEST OF ARUSHA</h4>
                                <p className="text-primary mb-0">Celebrate the diverse flavours of Tanzania culinary</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                                <img className="img-fluid rounded-top w-100" src="img/WINESS.jpg" alt="A Night to Remember" />
                            </div>
                            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                <h4 className="mb-2">A NIGHT TO REMEMBER</h4>
                                <p className="text-primary mb-0">The perfect setting for entertaining guests or unwinding after a long day</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                                <img className="img-fluid rounded-top w-100" src="img/NIGT2.jpg" alt="Comfortable, Elegant" />
                            </div>
                            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                <h4 className="mb-2">COMFORTABLE, ELEGANT</h4>
                                <p className="text-primary mb-0">Luxury five-star hotel in the heart of the city</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
