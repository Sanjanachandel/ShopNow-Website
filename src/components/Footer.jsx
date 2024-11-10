import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        {/* Footer Top Section */}
        <div className="row">
          {/* Shop Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-light fw-bold fs-2 mb-3">Shop</h5>
            <ul className="list-unstyled">
              <li><a href="/product" className="text-light text-decoration-none fs-4">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none fs-4">Cart</a></li>
              <li><a href="/checkout" className="text-light text-decoration-none fs-4">Checkout</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-light fw-bold fs-2 mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/contact" className="text-light text-decoration-none fs-4">Contact Us</a></li>
              <li><a href="/about" className="text-light text-decoration-none fs-4">About Us</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-light fw-bold  fs-2 mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-2 mx-2"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-2 mx-2"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-2 mx-2"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-2 mx-2"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>

          {/* Made By Section */}
          <div className="col-md-3 text-center text-md-right fs-4">
            <p className="mb-0">Made with ❤️ by Sanjana</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="d-flex justify-content-center align-items-center mt-4 pt-4 border-top border-light">
          <div className="col-md-12 text-center fs-4">
            <p className="mb-0 text-light">© {new Date().getFullYear()} ShopNow. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
