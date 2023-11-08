import React from "react";

function Reviews() {
  return (
    <section id="testimonials">
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="7000" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2>
              This is the best weather app that I've ever used. It is so easy to use.
            </h2>
            <img src="images/test_1.jpeg" alt="dog-profile" />
            <em>Busayo, Abeokuta</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Great App. Fascinating User Interface.
            </h2>
            <img className="testimonial-image" src="images/test_2.jpeg" alt="lady-profile" />
            <em>Oluchi, Lagos</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Cool app. It gives me the weather condition of places I never thought it would cover
            </h2>
            <img className="testimonial-image" src="images/test_3.jpeg" alt="lady-profile" />
            <em>Femi, Akure</em>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Reviews;
