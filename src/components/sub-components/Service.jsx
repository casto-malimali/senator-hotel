import React from 'react';


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
                Unwind in our beautifully appointed guestrooms whether traveling for business or leisure with all the facilities of a contemporary luxury hotel with a concoction of your choice ...
              </h6>
            </div>
            <div className="row g-5">
              {roomData.map((room, index) => (
                <div key={index} className={`col-md-4 service-item wow zoomIn`} data-wow-delay={room.delay}>
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src={room.imgSrc} alt={room.alt} />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <a href={room.link}>
                      <h5 className="m-0">{room.title}</h5>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-7">
            <div className="row g-5">
              {additionalRoomData.map((room, index) => (
                <div key={index} className={`col-md-6 service-item wow zoomIn`} data-wow-delay={room.delay}>
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src={room.imgSrc} alt={room.alt} />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <a href={room.link}>
                      <h5 className="m-0">{room.title}</h5>
                    </a>
                  </div>
                </div>
              ))}
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

const roomData = [
  {
    imgSrc: "img/service-1.jpg",
    alt: "Superior Standard Room",
    link: "Superior-Standard-Room.html",
    title: "Superior Standard Room",
    delay: "0.6s",
  },
  {
    imgSrc: "img/service-2.jpg",
    alt: "Executive Room",
    link: "Executive-Room.html",
    title: "Executive Room",
    delay: "0.9s",
  },
  {
    imgSrc: "img/service-3.jpg",
    alt: "Suite Room",
    link: "Sweet-Room.html",
    title: "Suite Room",
    delay: "0.9s",
  },
  {
    imgSrc: "img/service-1.jpg",
    alt: "Superior Standard Room",
    link: "Superior-Standard-Room.html",
    title: "Superior Standard Room",
    delay: "0.6s",
  },
  {
    imgSrc: "img/service-2.jpg",
    alt: "Executive Twin Rooms",
    link: "Executive-Twin-Rooms.html",
    title: "Executive Twin Rooms",
    delay: "0.9s",
  },
  {
    imgSrc: "img/service-2.jpg",
    alt: "Triple Rooms",
    link: "Triple-Rooms.html",
    title: "Triple Rooms",
    delay: "0.9s",
  },
];

const additionalRoomData = [
  {
    imgSrc: "img/service-3.jpg",
    alt: "Superior Standard Room Double",
    link: "",
    title: "Superior Standard Room Double",
    delay: "0.3s",
  },
  {
    imgSrc: "img/service-1.jpg",
    alt: "Sweet Double Room",
    link: "",
    title: "Sweet Double Room",
    delay: "0.6s",
  },
];

export default Service;
