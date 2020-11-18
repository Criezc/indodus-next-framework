import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div className="owl-carousel testimonials-carousel"></div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
