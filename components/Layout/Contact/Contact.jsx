import React, { Component } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_29civq9",
        e.target,
        "user_vTT83k6uYZxFpYzxGCj1p"
      )
      .then()
      .catch();
    e.target.reset();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    toast.success("Your message sucessfully sent");
  };

  render() {
    return (
      <React.Fragment>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.807897349463!2d106.780227!3d-6.137155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc5c2316da52938f!2sIndodus%20Plas%20.CV!5e0!3m2!1sid!2sid!4v1601470865929!5m2!1sid!2sid"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: "270px" }}
                allow="fullscreen"
                title="google-map"
              ></iframe>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="ri-map-pin-2-fill"></i>
                    <h4>Location:</h4>
                    <p style={{ color: "#ffc451" }}>
                      {" "}
                      Teluk Gong, Jakarta Utara
                    </p>
                  </div>

                  <div className="email">
                    <i className="ri-mail-send-fill"></i>
                    <h4>Email:</h4>
                    <p style={{ color: "#ffc451" }}>indodus.plas@yahoo.com</p>
                    {/* <p>indodus.plas@yahoo.com</p> */}
                  </div>

                  <div className="phone">
                    <i className="ri-phone-fill"></i>
                    <h4>Phone / Whatsapp:</h4>
                    <p style={{ color: "#ffc451" }}>
                      021-6683511 / 081519129070{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  className="php-email-form"
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        required
                        onChange={this.handleChange.bind(this)}
                        value={this.state.name}
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        required
                        onChange={this.handleChange.bind(this)}
                        value={this.state.email}
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                      required
                      onChange={this.handleChange.bind(this)}
                      value={this.state.subject}
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      required
                      onChange={this.handleChange.bind(this)}
                      value={this.state.message}
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      value="Send Message"
                      className="btn btn-success"
                    >
                      Send Message
                    </button>
                    <ToastContainer transition={Bounce} autoClose={8000} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
