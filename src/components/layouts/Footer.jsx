import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
 <> 
     <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{ marginTop: '-75px' }}>
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">SENETOR HOTEL</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="/">WELCOME SENATOR HOTEL</a>
                <a className="text-light mb-2" href="/#">P.O.BOX 15666, ARUSHA-TANZANIA</a>
                <a className="text-light mb-2" href="/#">General info: +255 766 007 599</a>
                {/* <a className="text-light mb-2" href="/#">Customer Care: +255 789 746 464</a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Popular Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                <Link className="text-light mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                <Link className="text-light mb-2" to="/executive-room"><i className="bi bi-arrow-right text-primary me-2"></i>Accommodation</Link>
                <Link className="text-light mb-2" to="/facility"><i className="bi bi-arrow-right text-primary me-2"></i>Facility</Link>
                <Link className="text-light" to="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>Father Babu Road, Arusha, Tanzania</p>
              <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i><a href="mailto:info@senatorhotel.co.tz" style={ {color: 'white'}}>info@senatorhotel.co.tz</a></p>
              <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i><a href="tel:+255766007599" style={ {color: 'white'}}>+255 766 007 599</a></p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                  <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="https://www.instagram.com/senatorhotelarusha/" _blank><i className="fab fa-facebook-f fw-normal"></i></a>
                  <a className="btn btn-lg btn-primary btn-lg-square rounded" href="https://www.instagram.com/senatorhotelarusha/" _blank><i className="fab fa-instagram fw-normal"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-light py-4" style={{ background: '#051225' }}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="/">Senator Hotel</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://www.inaccessmedia.co.tz/">In Access Media</a></p>
            </div>
          </div>
        </div>
      </div>   
      <div className="classen">
        
      </div>
 </>
  )
}

export default Footer