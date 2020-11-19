import React, { Component } from "react";

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
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="img/products/box.jpg"
                    className="img-fluid"
                    alt="corrugate-box"
                  />
                  <div className="portfolio-info">
                    <h4>Corrugated Box</h4>
                    <p>
                      Packaging sekunder atau tersier yang terbuat dari lapisan
                      kertas Kraft. Pada umumnya digunakan sebagai wadah
                      pelindung produk primer atau sekunder saat pengiriman dan
                      pemindahan.
                      <br />
                      <span style={{ color: "#ffc451" }}>
                        *Harga berdasarkan bahan dan qty pemesanan
                      </span>
                    </p>
                    <div className="portfolio-links">
                      <a
                        href="img/products/box.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Corrugated Box"
                      >
                        <i className="ri-add-line"></i>
                      </a>
                      {/* <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="img/products/eco.jpg"
                    className="img-fluid"
                    alt="diecut-box"
                  />
                  <div className="portfolio-info">
                    <h4>Eco-Plastic</h4>
                    <p>
                      {" "}
                      Plastik yang terbuat dari bahan dasar tepung singkong
                      dengan daya ketahanan setara dengan plastik Non-Cassava
                      <br />
                      <span style={{ color: "#ffc451" }}>
                        *Harga berdasarkan bahan dan qty pemesanan
                      </span>
                    </p>
                    <div className="portfolio-links">
                      <a
                        href="img/products/eco.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="eco-plastic"
                      >
                        <i className="ri-add-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="img/products/duplex.jpg"
                    className="img-fluid"
                    alt="duplex-diecut"
                  />
                  <div className="portfolio-info">
                    <h4>Duplex Diecut</h4>
                    <p>
                      Packaging sekunder yang terbuat dari bahan kertas
                      (Duplex/Art Carton/Ivory) untuk melindungi isi produk dari
                      kerusakan akibat faktor eksternal. serta memiliki kesan
                      visual lebih mewah
                      <br />
                      <span style={{ color: "#ffc451" }}>
                        *Harga berdasarkan bahan dan qty pemesanan
                      </span>
                    </p>
                    <div className="portfolio-links">
                      <a
                        href="img/products/duplex.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="duplex-diecut"
                      >
                        <i className="ri-add-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="/img/portfolio/portfolio-4.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="img/products/paper-bag.jpg"
                    className="img-fluid"
                    alt="paper=bag"
                  />
                  <div className="portfolio-info">
                    <h4>Paper Bag</h4>
                    <p>
                      Packaging yang terbuat dari kertas kraft. Pada umumnya
                      digunakan untuk memudahkan pelanggan membawa produk yang
                      mereka beli
                      <br />
                      <span style={{ color: "#ffc451" }}>
                        *Harga berdasarkan bahan dan qty pemesanan
                      </span>
                    </p>
                    <div className="portfolio-links">
                      <a
                        href="img/products/paper-bag.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="paper-bag"
                      >
                        <i className="ri-add-line"></i>
                      </a>
                      {/* <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="img/products/diecut.jpg"
                    className="img-fluid"
                    alt="diecut-box"
                  />
                  <div className="portfolio-info">
                    <h4>Diecut Box</h4>
                    <p>
                      sebagai packaging primer atau sekunder yang terbuat dari
                      lapisan kertas kraft. Pada umumnya digunakan untuk
                      melindungi isi produk dari kerusakan-kerusakan akibat
                      faktor eksternal
                      <br />
                      <span style={{ color: "#ffc451" }}>
                        *Harga berdasarkan bahan dan qty pemesanan
                      </span>
                    </p>
                    <div className="portfolio-links">
                      <a
                        href="img/products/diecut.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="diecut-box"
                      >
                        <i className="ri-add-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="img/products/sack.jpg"
                    className="img-fluid"
                    alt="sack-craft"
                  />
                  <div className="portfolio-info">
                    <h4>Sack Kraft</h4>
                    <p>
                      Packaging yang terbuat dari bahan kertas kraft tipis yang
                      biasa digunakan untuk membungkus produk langsung. Sack
                      kraft digunakan untuk produk yang relatif kecil
                      <br />
                      <span style={{ color: "#ffc451" }}>
                        *Harga berdasarkan bahan dan qty pemesanan
                      </span>
                    </p>
                    <div className="portfolio-links">
                      <a
                        href="img/products/sack.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="sack-kraft"
                      >
                        <i className="ri-add-line"></i>
                      </a>
                      {/* <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Portfolio;
