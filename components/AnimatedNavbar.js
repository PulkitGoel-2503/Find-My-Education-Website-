import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for additional styling

const NavbarPage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Left-side Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="EduLearn Logo" height="50" />
        </Link>
        
        {/* Navbar Toggle for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Center - Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        
        {/* Right-side Login and Register Buttons */}
        <div className="d-flex align-items-center">
          <Link className="btn btn-outline-primary me-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;