import React, { Component } from "react";
import { Link } from "react-scroll";

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Products</h2>
              <p>Check our Products</p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src="img/delivery-box.png" alt="delivery-box" />
                  </div>
                  <h3>
                    <Link to="portfolio" smooth={true} duration={2000}>
                      Corrugated Diecut Box
                    </Link>
                  </h3>
                  <p>
                    sebagai packaging primer atau sekunder yang terbuat dari
                    lapisan kertas kraft. Pada umumnya digunakan untuk
                    melindungi isi produk dari kerusakan-kerusakan akibat faktor
                    eksternal
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src="img/box.png" alt="box" />
                  </div>
                  <h3>
                    <Link to="portfolio" smooth={true} duration={2000}>
                      Duplex Diecut Box
                    </Link>
                  </h3>
                  <p>
                    Packaging sekunder yang terbuat dari bahan kertas
                    (Duplex/ArtCarton/Ivory) untuk melindungi isi produk dari
                    kerusakan akibat faktor eksternal. serta memiliki kesan
                    visual lebih mewah
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src="img/shopping-bag.png" alt="shopping-bag" />
                  </div>
                  <h3>
                    <Link to="portfolio" smooth={true} duration={2000}>
                      Paper Bag
                    </Link>
                  </h3>
                  <p>
                    Packaging yang terbuat dari kertas kraft. Pada umumnya
                    digunakan untuk memudahkan pelanggan membawa produk yang
                    mereka beli.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src="img/package.png" alt="package" />
                  </div>
                  <h3>
                    <Link to="portfolio" smooth={true} duration={2000}>
                      Corrugated Box
                    </Link>
                  </h3>
                  <p>
                    Packaging sekunder atau tersier yang terbuat dari lapisan
                    kertas Kraft. Pada umumnya digunakan sebagai wadah pelindung
                    produk primer atau sekunder saat pengiriman dan pemindahan.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src="img/plastic-bag.png" alt="plastic-bag" />
                  </div>
                  <h3>
                    <Link to="portfolio" smooth={true} duration={2000}>
                      Cassava Plast
                    </Link>
                  </h3>
                  <p>
                    Plastik yang terbuat dari bahan dasar tepung singkong dengan
                    daya ketahanan setara dengan plastik Non-Cassava
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <img src="img/paper-bag.png" alt="paper-bag" />
                  </div>
                  <h3>
                    <Link to="portfolio" smooth={true} duration={2000}>
                      Sack Kraft
                    </Link>
                  </h3>
                  <p>
                    Packaging yang terbuat dari bahan kertas kraft tipis yang
                    biasa digunakan untuk membungkus produk langsung. Sack kraft
                    digunakan untuk produk yang relatif kecil
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <h3>
                  Semua produk yang kami produksi dapat di{" "}
                  <b>daur ulang dan ramah terhadap lingkungan</b>
                </h3>
                <p style={{ color: "#ffc451", textAlign: "center" }}>
                  *Kontak Whatsapp untuk quotation harga, setiap produk memiliki
                  Minimum Quantity berdasarkan besar - kecil ukuran packaging
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Products;
