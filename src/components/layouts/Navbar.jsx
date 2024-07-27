import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
            <Link to="/" className="navbar-brand p-0">
                <h1 className="m-0 text-primary"><img src="img/logo.png" width="100px" alt="Logo" /></h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Accommodation</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="/superior-standard-room" className="dropdown-item">Superior Standard Room</Link>
                            <Link to="/executive-room" className="dropdown-item">Executive Room</Link>
                            <Link to="/suite-room" className="dropdown-item">Suite Room</Link>
                            <Link to="/executive-twin-rooms" className="dropdown-item">Executive Twin Rooms</Link>
                            <Link to="/triple-rooms" className="dropdown-item">Triple Rooms</Link>
                            <Link to="/superior-standard-room-double" className="dropdown-item">Superior Standard Room Double</Link>
                        </div>
                    </div>
                    <Link to="/restaurant-bar" className="nav-item nav-link">Restaurant & Bar</Link>
                    <Link to="/facility" className="nav-item nav-link">Facility</Link>
                    <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                    <Link to="/map-direction" className="nav-item nav-link">Map & Direction</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
                <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">Booking</Link>
            </div>
        </nav>
    );
};

export default Navbar;
