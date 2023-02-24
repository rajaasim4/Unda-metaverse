import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="Contact">
      <NavBar />
      <div className="Contact-main">
        <h2>Have questions? Let’s get in touch.</h2>
        <div className="Contact-form">
          <form action="">
            <div className="Contact-input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="Contact-input">
              <input type="text" placeholder="Email Address" />
            </div>
            <br />
            <div className="Contact-input">
              <input type="text" placeholder="Interested In" />
            </div>
            <div className="Contact-input">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="Contact-message">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="Contact-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
