import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './CoursesPage.css';


const CoursePage = () => {
    const [modalData, setModalData] = useState({ title: '', description:'', image: ''});

    const navigate = useNavigate();

    const courses = [
        {id:1, title: "Course 1", description: "Learn the basic of HTML, Css and JavaScript.", image: "/images/img-5.png" },
        {id:2, title: "Course 2", description: "Advance JavaScript and ES6+ concepts..", image: "/images/img-7.png" },
        {id:3, title: "Course 3", description: "Introduction to React.js and modern frontend development.", image: "/images/img-6.png" },
        {id:4, title: "Course 4", description: "Master backend development with Node.js.", image: "/images/img-8.png" },
        {id:5, title: "Course 5", description: "Full-stack development with MongoDB, Express, React, and Node.", image: "/images/img-3.png" },
        {id:6, title: "Course 6", description: "Database management and design using sql.", image: "/images/img-4.png" },
    ];

    //Set model data when the course card is clicked

    const handleCardClick = (course) => {
        setModalData(course);
    };

    const handleEnrollNowClick = () => {
        const modalElement = document.getElementById('courseModal');
       

      

        navigate(`/enroll?course=$ {encodeURIcomponents(modalData.title)}`);
    }

    return(
        <div className="courses-page">
            <div className="container py-5">
                <h2 className="text-center mb-5">Our Courses</h2>

                <div className="row">
                    {courses.map(course => (
                        <div className="col-md-4 mb-4" key={course.id}>
                            <div className="card h-100" onClick={() => handleCardClick(course)} data-bs-toggle="modal" data-bs-target="#courseModal">
                                <img src={course.image} className="card-img-top" alt={course.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                    <button className="btn btn-outline-primary">Learn More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for course details */}
            <div className="modal fade" id="courseModal" tabIndex="-1" aria-labelledby="courseModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="courseModalLabel">{modalData.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismis="modal" aria-label="Close"></button>
                        </div>
                        <div vlassName="modal-body">
                            <img src={modalData.image} className="img-fluid mb-4" alt="modalData.title"/>
                            <p>{modalData.description}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            

                            <button className="btn btn-primary" onClick={handleEnrollNowClick}>Enroll Now</button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;