import React, { Component } from "react";
import PortfolioData from "../../../portfolio.json";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Product Portfolio</h2>
              <p>Check our portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">Box</li>
                  <li data-filter=".filter-web">Bag</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {PortfolioData.map((data) =>
                data.type === "box" ? (
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img
                        src={data.imageSrc}
                        className="img-fluid"
                        alt={data.title}
                      />
                      <div className="portfolio-info">
                        <h4>{data.title}</h4>
                        <p>
                          {data.description}
                          <br />
                          <span style={{ color: "#ffc451" }}>
                            *Harga berdasarkan bahan dan qty pemesanan
                          </span>
                        </p>
                        <div className="portfolio-links">
                          <a
                            href={data.imageSrc}
                            data-gall="portfolioGallery"
                            className="venobox"
                            title={data.title}
                          >
                            <i className="ri-add-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <img
                        src={data.imageSrc}
                        className="img-fluid"
                        alt={data.title}
                      />
                      <div className="portfolio-info">
                        <h4>{data.title}</h4>
                        <p>
                          {data.description}
                          <br />
                          <span style={{ color: "#ffc451" }}>
                            *Harga berdasarkan bahan dan qty pemesanan
                          </span>
                        </p>
                        <div className="portfolio-links">
                          <a
                            href={data.imageSrc}
                            data-gall="portfolioGallery"
                            className="venobox"
                            title={data.title}
                          >
                            <i className="ri-add-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
