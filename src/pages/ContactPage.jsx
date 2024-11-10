import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    setShowPopup(true); // Show the popup

    // Hide the popup after a few seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Popup will disappear after 3 seconds
  };

  // Popup style object
  const popupStyle = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    fontSize: "1rem",
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {showPopup && (
          <div style={popupStyle} className="text-center">
            <p>Message sent successfully!</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
