import React from 'react'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
function Pricing() {
  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                <h1 className="display-5 mb-0">We Offer Fair Prices for Our Rooms</h1>
              </div>
              <p className="mb-4">Senetor We give you more of what you want and less of what you don't need, Also We Share a grand experience.</p>
              <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">Call for Booking Now</h5>
              <h1 className="wow fadeInUp" data-wow-delay="0.6s">+255 766 007 599</h1>
            </Col>
            <Col lg={7}>
              <Carousel className="price-carousel wow zoomIn" data-wow-delay="0.9s">
                <Carousel.Item className="price-item pb-4">
                  <div className="position-relative">
                    <img className="img-fluid rounded-top" src="img/price-1.jpg" alt="" />
                    <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <h2 className="text-primary m-0">$75</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>Superior Standard Room</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3"><span>Clothing and Footwear Repairing</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Dry Cleaner</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Free Wifi</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>Local Wine</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>Breakfast</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <Button href="appointment.html" className="btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Book Now</Button>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="price-item pb-4">
                  <div className="position-relative">
                    <img className="img-fluid rounded-top" src="img/price-2.jpg" alt="" />
                    <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <h2 className="text-primary m-0">$80</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>Executive Room</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3"><span>Clothing and Footwear Repairing</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Dry Cleaner</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Free Wifi</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>Local Wine</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>Breakfast</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <Button href="appointment.html" className="btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Book Now</Button>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="price-item pb-4">
                  <div className="position-relative">
                    <img className="img-fluid rounded-top" src="img/price-3.jpg" alt="" />
                    <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <h2 className="text-primary m-0">$85</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>Suite Room</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3"><span>Clothing and Footwear Repairing</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Dry Cleaner</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Free Wifi</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>Local Wine</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>Breakfast</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <Button href="appointment.html" className="btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Book Now</Button>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Pricing
