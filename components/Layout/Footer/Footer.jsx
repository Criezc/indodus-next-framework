import React, { Component } from "react";
import { Link } from "react-scroll";

let waLink =
  "https://api.whatsapp.com/send?phone=6281317569226&text=Hallo+Indodusplas+saya+berminat+custom+kardus";
waLink += "?phone=" + 6281317569226;
waLink +=
  "&text=" +
  encodeURIComponent("Hallo Indodusplas saya berminat custom kardus");

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="footer-info">
                    <h3>
                      CV.Indodus Plas<span>.</span>
                    </h3>
                    <p>
                      Teluk Gong <br />
                      Jakarta Utara
                      <br />
                      <br />
                      <strong>Phone:</strong> 021 6683511
                      <br />
                      <strong>Email:</strong> indodus.plas@yahoo.com
                      <br />
                    </p>
                    <div className="social-links mt-3">
                      <a
                        href={waLink}
                        target="_blank"
                        className="whatsapp"
                        rel="noopener noreferrer"
                      >
                        <i className="ri-whatsapp-line"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/indodus.plas/?hl=cs"
                        className="instagram"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                      {/* <a href="#" className="google-plus"
                          ><i className="bx bxl-skype"></i
                        ></a>
                        <a href="#" className="linkedin"
                          ><i className="bx bxl-linkedin"></i
                        ></a> */}
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 footer-info"
                  // style={{ textAlign: "center" }}
                >
                  <h3>
                    Business Hours <span>:</span>
                  </h3>
                  <p>
                    <span id="hours">Mon: 8:00 AM – 4:00 PM</span>
                    <br />
                    Tue: 8:00 AM – 4:00 PM
                    <br />
                    <span id="hours">Wed: 8:00 AM – 4:00 PM</span>
                    <br />
                    Thu: 8:00 AM – 4:00 PM
                    <br />
                    <span id="hours">Fri: 8:00 AM – 4:00 PM</span>
                    <br />
                    <span>
                      Saturday &amp; Sunday:{" "}
                      <span id="hours-closed">Closed</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>CV.Indodus Plas</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
        <Link
          to="hero"
          className="back-to-top"
          smooth={true}
          duration={1500}
          delay={500}
          style={{ cursor: "pointer" }}
        >
          <i className="ri-rocket-2-line"></i>
        </Link>
        <div id="preloader"></div>
      </React.Fragment>
    );
  }
}

export default Footer;
