import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Counts extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                data-aos="fade-right"
                data-aos-delay="100"
              ></div>
              <div
                className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="ri-emotion-happy-line"></i>
                        <VisibilitySensor onChange={this.onVisibilityChange}>
                          <CountUp
                            start={150}
                            end={this.state.didViewCountUp ? 250 : 0}
                            duration={10}
                          />
                        </VisibilitySensor>
                        <p>
                          <strong>Happy Customer</strong> Setiap tahunnya
                          Indodus Plas memproduksi lebih dari 2 juta pcs
                          Corrugated Box rata-rata per tahun
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="ri-time-line"></i>
                        <VisibilitySensor onChange={this.onVisibilityChange}>
                          <CountUp
                            start={0}
                            end={this.state.didViewCountUp ? 48 : 0}
                            duration={10}
                          />
                        </VisibilitySensor>
                        <p>
                          <strong>More than 45 years experience</strong>{" "}
                          Berpengalaman dalam dunia packaging selama lebih dari
                          45 tahun dengan berbagai macam ukuran dan desain
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="ri-pin-distance-line"></i>
                        <VisibilitySensor onChange={this.onVisibilityChange}>
                          <CountUp
                            start={0}
                            end={this.state.didViewCountUp ? 15 : 0}
                            duration={10}
                          />
                        </VisibilitySensor>
                        <p>
                          <strong>15 Provinsi Penyebaran</strong> Indodus Plas
                          memiliki customer yang tersebar sebanyak 15 Provinsi
                          di Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Counts;
