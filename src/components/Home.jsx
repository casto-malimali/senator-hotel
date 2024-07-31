import React from 'react'
import Spinner from './layouts/Spinner'
import Service from './sub-components/Service'
import Offer from './sub-components/Offer';
import Pricing from './sub-components/Pricing';
import TeamSection from './sub-components/TeamSection';
import Slider from './sub-components/Slider';


function Home() {
    return (
        <div>

            <Spinner />
           {/* Slider  */}
           <Slider />
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
                                Senator Hotel Arusha is conveniently located just a 3-minute drive from the Arusha Bus Terminal and a 30-minute drive (45km) from Kilimanjaro International Airport. For domestic flights, Arusha Airport is only 10 minutes away.
                                <br />
                                <br />
                                Our guests enjoy complimentary Wi-Fi throughout the hotel and secure on-site parking. Unwind in one of our 34 comfortable rooms, each equipped with modern amenities and local touches. We offer airport transfers, shuttle services, and 24-hour customer support for your convenience.
                                <br /> 
                                <br />
                                Savor the world on a plate at Simanjiro Restaurant. Our experienced chefs expertly craft a diverse menu including Continental, Italian, French, Burger, Pizza, Seafood, Vegetarian, and authentic Indian cuisine—the finest in Tanzania.
                                <br />
                                <br />
                                Need to freshen up your wardrobe? Our laundry and dry cleaning services have you covered. Stay informed with daily newspapers and our convenient delivery options.

                            </p>
                        </div>

                        <div className="col-lg-6 xxl-4" style={{ minHeight: '500px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about-senator-hotel.jpg" style={{ objectFit: 'cover' }} alt="About" />
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
                            <img src="img/amenites.jpg" alt="Amenities" width="100%" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Room service sction  */}

            <Service />
            <Offer />
            <Pricing />
            <TeamSection />

        </div>
    )
}

export default Home