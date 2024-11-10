// Account.jsx
import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    setUserData(storedUserData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">My Account</h1>
        <hr />
        {userData ? (
          <div className="text-center">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
        ) : (
          <p className="text-center">No user data found. Please log in.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Account;
