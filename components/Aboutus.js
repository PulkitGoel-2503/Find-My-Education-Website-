import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
    const teamMembers = [
        {id: 1, name: "PulkitGoel", role: "CEO", image: "/images/img-1.png", bio:"Pulkit is a visionary leader with over 15 years of experience in education technology."},
        {id: 2, name: "John", role: "CTO", image: "/images/img-10.jpeg", bio:"John is a tech genius who leads our development team t create cutting-edge platform."},
        {id: 3, name: "Deepanshu", role: "Lead Instructor", image: "/images/img-11.jpeg", bio:"Deepanshu has a passion for teaching and has helped thousands of students achieve their goals."},
    ];

    return (
        <div className="about-page py-5">
            <div className="container">
                <h2 className="text-center mb-5">About Us</h2>
                <p className="lead text-center mb-5">At EduLearn, our mission is to make education accessible to everyone. We are a passionate team committed to providing hign-quality learning experience.</p>

                <section className="team-section">
                    <h3 className="text-center mb-4">Meet our team</h3>
                    <div className="row">
                        {teamMembers.map((member) =>(
                            <div className="col-md-4 text-center" key={member.id}>
                                <div className="card team-card">
                                <img src={""} className="card-img-top" alt={member.name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{member.name}</h5>
                                        <p className="card-text">{member.role}</p>
                                        <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={`#modal${member.id}`}>View Bio</button>

                                    </div>
                                </div>

                                {/* Modal for team member bio */}
                                <div className="modal fade" id={`modal${member.id}`} tabIndex="-1" aria-labelledby={`modalLabel${member.id}`} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id={`modalLabel${member.id}`}>{member.name}</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src={""} className="img-fluid mb-3" alt={member.name}/>
                                                <p>{member.bio}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondry" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section classname="vision-mission mt-5">
                    <h3 className="tetx-center mb-4">Our Vision & Mission</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Our Vision</h4>
                            <p>To become the leading global platform for online education, empowring indivisuals to achieve their personal and professional goals through learning.</p>
                        </div>
                        <div className="col-md-6">
                            <h4>Our Mission</h4>
                            <p>We strive to provide high-quality, accessible, and affordable education to students around the world, using technology and innovation to create a better future.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Aboutus;