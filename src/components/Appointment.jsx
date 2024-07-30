import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointment = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    room: '',
    type: '',
    name: '',
    email: '',
    date: new Date(),
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('room', formData.room);
    data.append('type', formData.type);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('date', formData.date.toISOString().split('T')[0]);
    data.append('time', formData.time);

    fetch('appointment.php', {
      method: 'POST',
      body: data
    })
      .then(response => response.text())
      .then(result => {
        alert(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      {/* Full Screen Search Start */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn bg-white btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: '600px' }}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-primary p-3"
                    placeholder="Type search keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Full Screen Search End */}

      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Book Here</h1>
            <a href="/" className="h4 text-white">Home</a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="/" className="h4 text-white">Book Here</a>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Appointment Start */}
      <div className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '90px' }}>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Hotelier You Can Trust</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                <h1 className="text-white mb-4">Book Here</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        name="room"
                        value={formData.room}
                        onChange={handleChange}
                        style={{ height: '55px' }}
                      >
                        <option value="">Select A Room</option>
                        <option value="Superior Standard Room">Superior Standard Room</option>
                        <option value="Executive Twin Rooms">Executive Twin Rooms</option>
                        <option value="Triple Rooms">Triple Rooms</option>
                        <option value="Superior Standard Room Double">Superior Standard Room Double</option>
                        <option value="Sweet Double Room">Sweet Double Room</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        style={{ height: '55px' }}
                      >
                        <option value="">Select Type</option>
                        <option value="Group">Group</option>
                        <option value="Family">Family</option>
                        <option value="Person">Person</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <DatePicker
                        selected={formData.date}
                        onChange={handleDateChange}
                        className="form-control bg-light border-0"
                        placeholderText="Date"
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
    </div>
  );
};

export default Appointment;
