import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To get query params from the URL
import './EnrollNowPage.css'; // Custom CSS for extra styling

const EnrollNowPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCourse = params.get('course') || ''; // Get the course from URL

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(initialCourse); // Set the course name

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic
    console.log("Form Submitted:", { name, email, course });
    alert('Enrollment submitted successfully!');
  };

  return (
    <div className="enroll-page d-flex align-items-center justify-content-center">
      <div className="card p-5 shadow-lg">
        <h2 className="text-center mb-4">Enroll in {course}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label">Selected Course</label>
            <input
              type="text"
              className="form-control"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)} // Let user modify if needed
              required
              disabled
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit Enrollment</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollNowPage;