import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);  // Pulling cart state from Redux

  // Check if the user is logged in by reading from localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Logout function to clear login state and reload the page
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload to update navbar state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fst-italic fs-1 px-2 d-flex align-items-center" to="/">
          {/* Logo added here */}
          <img src="/assets/logo.png" alt="Logo" style={{ height: "80px", marginRight: "8px" }} />
          ShOpNOw
        </NavLink>
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto fs-4 my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            {isLoggedIn ? (
              <>
                <NavLink to="/account" className="btn btn-outline-dark m-1">
                  <i className="fa fa-user mr-1"></i> My Account
                </NavLink>
                <button onClick={handleLogout} className="btn btn-outline-dark m-1">
                  <i className="fa fa-sign-out-alt mr-1"></i> Logout
                </button>
                <NavLink to="/cart" className="btn btn-outline-dark m-1">
                  <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) {/* Cart count updated */}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
