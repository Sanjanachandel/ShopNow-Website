import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetCart } from "../redux/action/cartActions";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();  // Initialize dispatch
  const navigate = useNavigate();  // Hook to navigate

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    const handleFormSubmit = (event) => {
      event.preventDefault();

      // Get form data
      const formData = new FormData(event.target);
      const billingInfo = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        address: formData.get("address"),
        country: formData.get("country"),
        state: formData.get("state"),
        zip: formData.get("zip"),
        ccName: formData.get("cc-name"),
        ccNumber: formData.get("cc-number"),
        ccExpiration: formData.get("cc-expiration"),
        ccCVV: formData.get("cc-cvv"),
      };

      // Check if any required field is missing
      for (const [key, value] of Object.entries(billingInfo)) {
        if (!value) {
          alert(`Please fill in the required field: ${key.replace(/([A-Z])/g, ' $1').toUpperCase()}`);
          return; // Stop further execution if a required field is empty
        }
      }

      // Proceed to the checkout success page if all required fields are filled
      navigate("/checkout-success", {
        state: {
          orderedItems: state,
          billingInfo,
          subtotal,
          shipping,
          totalAmount: subtotal + shipping,
        },
      });
      dispatch(resetCart());
    };

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={handleFormSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          required
                        />
                        <div className="invalid-feedback">Valid first name is required.</div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          required
                        />
                        <div className="invalid-feedback">Valid last name is required.</div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">Please enter your shipping address.</div>
                      </div>

                      <div className="col-md-5 my-1">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <select className="form-select" id="country" name="country" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid country.</div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <select className="form-select" id="state" name="state" required>
                          <option value="">Choose...</option>
                          <option>Andhra Pradesh</option>
                          <option>Telangana</option>
                          <option>Punjab</option>
                          <option>Tamil Nadu</option>
                          <option>Kerala</option>
                          <option>Uttar Pradesh</option>
                        </select>
                        <div className="invalid-feedback">Please provide a valid state.</div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          name="zip"
                          required
                        />
                        <div className="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>

                    <hr className="my-4" />
                    <h4 className="mb-3">Payment</h4>
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          name="cc-name"
                          required
                        />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">Name on card is required</div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="cc-number"
                          name="cc-number"
                          required
                        />
                        <div className="invalid-feedback">Credit card number is required</div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          name="cc-expiration"
                          required
                        />
                        <div className="invalid-feedback">Expiration date required</div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          name="cc-cvv"
                          required
                        />
                        <div className="invalid-feedback">Security code required</div>
                      </div>
                    </div>

                    <hr className="my-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      {state.length ? <ShowCheckout /> : <EmptyCart />}
      <Footer />
    </>
  );
};

export default Checkout;
