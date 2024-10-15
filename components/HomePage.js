import React from 'react';
import './HomePage.css'; // Import custom CSS for the homepage

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Background Image Section */}
      <header className="bg-image d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bold">Welcome to EduLearn Institute</h1>
          <p className="lead">Shaping the future through quality education</p>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4">About Our Institute</h2>
          <p className="lead">
            EduLearn Institute is dedicated to providing world-class education to students from all walks of life. Our platform
            offers a variety of courses designed to help you achieve your personal and professional goals.
          </p>
          <p>
            Whether you're looking to advance in your career, develop new skills, or pursue your passions, EduLearn is here to
            support your learning journey. Our innovative approach ensures that education is accessible, affordable, and of the
            highest quality.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@edulearn.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/courses" className="text-white">Courses</a></li>
                <li><a href="/about" className="text-white">About Us</a></li>
                <li><a href="/contact" className="text-white">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr className="bg-light" />
          <p className="mb-0">&copy; 2024 EduLearn Institute. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;