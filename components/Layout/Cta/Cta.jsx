import React, { Component } from "react";

let waLink =
  "https://api.whatsapp.com/send?phone=6281317569226&text=Hallo+Indodusplas+saya+berminat+custom+kardus";
waLink += "?phone=" + 6281317569226;
waLink +=
  "&text=" +
  encodeURIComponent("Hallo Indodusplas saya berminat custom kardus");

class Cta extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <a
                className="cta-btn"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Cta;
