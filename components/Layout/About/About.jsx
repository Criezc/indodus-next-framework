import React from "react";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <p>About Us</p>
            </div>
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="img/about.jpg" className="img-fluid" alt="about-1" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h3>
                  Indodus Plas adalah perusahaan packaging yang sudah beroperasi
                  sejak tahun 1972 dengan produk utama yang di produksi awal
                  adalah Corrugated Box.
                </h3>
                <h2>
                  Seiring berjalannya waktu melakukan ekspansi terhadap produk
                  kemasan lainnya seperti Kemasan Plastik, Kemasan Diecut, serta
                  Paper Bag.
                </h2>
                <h4>
                  <span>
                    <b>Our Vision : </b>
                  </span>
                  Menjadi perusahaan supplier kardus terbesar di Indonesia
                </h4>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
