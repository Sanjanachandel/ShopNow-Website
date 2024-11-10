import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from "../components";

const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  // Ensure the state is available before accessing it
  const { orderedItems, billingInfo, subtotal, shipping, totalAmount } = location.state || {};

  if (!orderedItems || !billingInfo) {
    return (
      <div className="container my-3 py-3">
        <h1>Checkout failed</h1>
        <p>No order information was received.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout Successful</h1>
        <p className="text-center">Thank you for your order!</p>

        {/* Order Details */}
        <div className="order-details my-4">
          <h3>Your Ordered Items</h3>
          <ul>
            {orderedItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - Quantity: {item.qty} - Price: ${item.price} each - Total: ${item.price * item.qty}
              </li>
            ))}
          </ul>
        </div>

        {/* Billing Details */}
        <div className="billing-info my-4">
          <h3>Billing Details</h3>
          <p><strong>Name:</strong> {billingInfo.firstName} {billingInfo.lastName}</p>
          <p><strong>Email:</strong> {billingInfo.email}</p>
          <p><strong>Address:</strong> {billingInfo.address} {billingInfo.address2 && `, ${billingInfo.address2}`}</p>
          <p><strong>Country:</strong> {billingInfo.country}</p>
          <p><strong>State:</strong> {billingInfo.state}</p>
          <p><strong>Zip:</strong> {billingInfo.zip}</p>
        </div>

        {/* Order Summary */}
        <div className="order-summary my-4">
          <h3>Order Summary</h3>
          <p><strong>Subtotal:</strong> ${Math.round(subtotal)}</p>
          <p><strong>Shipping:</strong> ${shipping}</p>
          <p><strong>Total Amount:</strong> ${Math.round(totalAmount)}</p>
        </div>

        {/* Button to navigate back */}
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutSuccess;
