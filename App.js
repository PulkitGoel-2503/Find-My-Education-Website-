import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedNavbar from './components/AnimatedNavbar';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import Aboutus from './components/Aboutus';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import EnrollNowPage from './components/EnrollNowPage';

import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <AnimatedNavbar />
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/Courses" element={<CoursesPage />} />
       <Route path="/about" element={<Aboutus />} />
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/login" element={<LoginPage />} /> 
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/enroll" element={<EnrollNowPage />} /> 
      </Routes>
      
    </Router>
  );
}

export default App;
