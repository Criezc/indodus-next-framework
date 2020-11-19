import React from "react";
import { Link } from "react-scroll";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <Link to="hero" duration={1500} smooth={true}>
                CV.Indodus Plas<span>.</span>
              </Link>
            </h1>
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Product</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
