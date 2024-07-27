import React from 'react';

import { Modal, Button, InputGroup, FormControl, Carousel } from 'react-bootstrap';

// Full Screen Search Component
const FullScreenSearch = () => {
    return (
        <Modal show={true} id="searchModal" size="fullscreen" aria-labelledby="searchModalLabel" centered>
            <Modal.Dialog className="modal-fullscreen">
                <Modal.Content style={{ background: 'rgba(9, 30, 62, .7)' }}>
                    <Modal.Header closeButton className="border-0">
                        <Button variant="white" className="btn-close" aria-label="Close" />
                    </Modal.Header>
                    <Modal.Body className="d-flex align-items-center justify-content-center">
                        <InputGroup style={{ maxWidth: '600px' }}>
                            <FormControl
                                placeholder="Type search keyword"
                                className="bg-transparent border-primary p-3"
                            />
                            <Button variant="primary" className="px-4">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Dialog>
        </Modal>
    );
};

// Carousel Component
const CarouselComponent = () => {
    return (
        <div className="container-fluid p-0">
            <Carousel id="header-carousel" className="carousel-fade" controls>
                <Carousel.Item className="active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="display-1 text-white mb-md-1 animated zoomIn">
                                Welcome To Senator Hotel Arusha
                            </h4>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                                Book Now
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add more Carousel.Items here for other images */}
            </Carousel>
        </div>
    );
};

// About Component
const About = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="section-title mb-4">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                            <h1 className="display-5 mb-0">Senator Hotel Arusha</h1>
                        </div>
                        <p className="mb-4">
                            Senator hotel Arusha is approximately 3 minutes drive from the Arusha bus terminal
                            station and 30 minutes (45km) from Kilimanjaro international airport and 10 minutes from Domestic airport (Arusha Airport). Apart from that, we
                            have different services: free wifi internet access is
                            available to all guests, secure parking is available inside the hotel, 27 comfortable rooms
                            equipped with an array of modern and cultural amenities to
                            ensure you a pleasant stay. Airport transfer and shuttle service are available at the hotel,
                            24 hours customer service support. Simanjiro
                            restaurant our experienced chefs are connoisseurs of cuisine from across the world. Continental
                            Italian, French, Burger, Pizza, Seafood, Vegetarian foods and courses of finest Indian cuisine in
                            Tanzania.
                            Laundry/Drycleaner service are available to take care of the guests' clothes wishing to stay up to
                            date with current news have an opportunity to use the daily newspaper and delivery services
                        </p>
                    </div>
                    <div className="col-lg-6 xxl-4" style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                                src="img/about.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Appointment Component
const Appointment = () => {
    return (
        <div className="container-fluid bg-primary my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-12 py-5">
                        <img src="img/amenites.png" width="100%" alt="Amenities" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Service Component
const Service = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5 mb-5">
                    <div className="col-lg-12">
                        <div className="section-title mb-5">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">
                                LAVISHLY DECORATED ROOMS IN THE HEART OF ARUSHA.
                            </h5>
                            <h6 className="display-7 mb-0">
                                Unwind in our beautifully appointed guestrooms whether traveling for business or leisure
                                with all the facilities of a contemporary luxury hotel with a concoction of your choice ...
                            </h6>
                        </div>
                        <div className="row g-5">
                            {/* Service Items */}
                        </div>
                    </div>
                </div>
                <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-lg-7">
                        <div className="row g-5">
                            {/* Service Items */}
                        </div>
                    </div>
                    <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                        <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                            <h3 className="text-white mb-3">Book Now</h3>
                            <h2 className="text-white mb-0">+255 766 007 599</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Offer Component
const Offer = () => {
    return (
        <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                        <div className="offer-text text-center rounded p-5">
                            <h1 className="display-5 text-white">Offer 10% On Your First Time To Book Senator Hotel</h1>
                            <a href="appointment.html" className="btn btn-dark py-3 px-5 me-3">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Pricing Component
const Pricing = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="section-title mb-4">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                            <h1 className="display-5 mb-0">We Offer Fair Prices for Our Rooms</h1>
                        </div>
                        <p className="mb-4">
                            Senator We give you more of what you want and less of what you don't need, Also We
                            Share a grand experience.
                        </p>
                        <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">Call for Booking Now</h5>
                        <h1 className="wow fadeInUp" data-wow-delay="0.6s">+255 766 007 599</h1>
                    </div>
                    <div className="col-lg-7">
                        <div className="owl-carousel price-carousel wow zoomIn" data-wow-delay="0.9s">
                            {/* Price Items */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Blog Component
const Blog = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5 mb-5">
                    <div className="col-lg-12">
                        <div className="section-title mb-5">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Blog</h5>
                            <h1 className="display-5 mb-0">Read The Latest News About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative mb-3">
                                <img className="img-fluid rounded" src="img/blog-1.jpg" alt="Blog" />
                                <div className="blog-date">
                                    <h6 className="text-white mb-0">25</h6>
                                    <span className="text-white">July</span>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="bi bi-person me-2"></i>Admin</small>
                                    <small><i className="bi bi-tag me-2"></i>Business</small>
                                </div>
                                <a href="blog-detail.html" className="h5 d-block mb-2">How To Make The Most Of A Hotel Stay</a>
                                <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </div>
                    {/* Add more Blog Items here */}
                </div>
            </div>
        </div>
    );
};

// Contact Component
const Contact = () => {
    return (
        <div className="container-fluid bg-primary my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="section-title mb-5">
                            <h5 className="position-relative d-inline-block text-white text-uppercase">Contact Us</h5>
                            <h1 className="display-5 mb-0 text-white">Get In Touch With Us</h1>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white mb-2">Address</h5>
                            <p className="text-white">123 Street, City, Country</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white mb-2">Phone</h5>
                            <p className="text-white">+255 766 007 599</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="text-white mb-2">Email</h5>
                            <p className="text-white">info@senatorhotel.com</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control border-0" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control border-0" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control border-0" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-light py-2 px-4">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Footer Component
const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light mt-5 pt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#" className="text-light">About Us</a></li>
                            <li><a href="#" className="text-light">Services</a></li>
                            <li><a href="#" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Contact Info</h5>
                        <p><i className="bi bi-house-door"></i> 123 Street, City, Country</p>
                        <p><i className="bi bi-telephone"></i> +255 766 007 599</p>
                        <p><i className="bi bi-envelope"></i> info@senatorhotel.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Follow Us</h5>
                        <div className="d-flex">
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Sign up for our newsletter to get the latest news and updates.</p>
                        <form>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                                <button className="btn btn-light" type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="mb-0">&copy; 2024 Senator Hotel Arusha. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const Homa = () => {
    return (
        <div>
            <FullScreenSearch />
            <CarouselComponent />
            <About />
            <Appointment />
            <Service />
            <Offer />
            <Pricing />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Homa