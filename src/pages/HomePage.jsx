import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // Handle Account Page Navigation
  const handleAccountClick = () => {
    navigate('/account'); // Navigate to the account page
  };

  // Handle Logout
  const handleLogout = () => {
    // Clear the user data or token from localStorage, Redux, or other state management
    localStorage.removeItem("isLoggedIn"); // For example, removing login state

    // Redirect to the home page after logout
    navigate('/'); // This redirects the user to the homepage
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleAccountClick}>My Account</button>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </div>
  );
};

export default HomePage;
