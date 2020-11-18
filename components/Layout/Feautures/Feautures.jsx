import React from "react";

class Feautures extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="image col-lg-6"
                style={{ backgroundImage: "url('./img/about_2.jpg')" }}
                data-aos="fade-right"
              ></div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div
                  className="icon-box mt-5 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <h2>
                    <b>Our Mission : </b>
                  </h2>
                  <i className="ri-coins-line"></i>
                  <h4>Low Cost Packaging</h4>
                  <p>
                    Membantu pelanggan membuat kemasan berkualitas dengan harga
                    relatif rendah
                  </p>
                </div>
                <div
                  className="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i className="ri-shape-line"></i>
                  <h4>Produk Berbahan Kardus</h4>
                  <p>Mengembangkan produk berbahan kardus</p>
                </div>
                <div
                  className="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i className="ri-service-line"></i>
                  <h4>Eco-Friendly</h4>
                  <p>
                    Menjaga lingkungan dengan menggunakan kardus sebagai bahan
                    kemasan yang dapat di daur ulang kembali
                  </p>
                </div>
                <div
                  className="icon-box mt-5"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <i className="ri-map-pin-user-line"></i>
                  <h4>Customer Satisfaction</h4>
                  <p>
                    Bagi kami kepuasan pelanggan adalah hal <b>terpenting</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feautures;
