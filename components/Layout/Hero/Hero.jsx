import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          id="hero"
          className="d-flex align-items-center justify-content-center"
        >
          <div className="container" data-aos="fade-up">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="col-xl-6 col-lg-8">
                <h2 style={{ color: "#ffc451" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "We care for your product",
                        "Build yours with us",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <h2>More than 45 years of experience</h2>
              </div>
            </div>
            <div
              className="row mt-5 justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <div className="col-xl-2 col-md-4 col-6">
                <div className="icon-box">
                  <img src="img/package.png" alt="package-box" />
                  <h3>
                    <Link to="services" smooth={true} duration={1500}>
                      Corrugated Box
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-6">
                <div className="icon-box">
                  <img src="img/delivery-box.png" alt="delivery-box" />
                  <h3>
                    <Link to="services" smooth={true} duration={1500}>
                      Diecut Duplex
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <img src="img/box.png" alt="box" />
                  <h3>
                    <Link to="services" smooth={true} duration={1500}>
                      Diecut Corrugated Box
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
                <div className="icon-box">
                  <img src="img/plastic-bag.png" alt="plastic-bag" />
                  <h3>
                    <Link to="services" smooth={true} duration={1500}>
                      Cassava Plast
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
                <div className="icon-box">
                  <img src="img/shopping-bag.png" alt="shopping-bag" />
                  <h3>
                    <Link to="services" smooth={true} duration={1500}>
                      Paper Bag
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Hero;
