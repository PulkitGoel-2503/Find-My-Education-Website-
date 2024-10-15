import React from 'react';
import './Contact.css'; // Custom CSS for additional styling

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Header */}
      <header className="contact-header text-white text-center py-5">
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="lead">We'd love to hear from you! Get in touch with us using the form below.</p>
      </header>

      {/* Contact Form and Details */}
      <section className="contact-info py-5">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <h2>Send Us a Message</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="col-md-6">
              <h2>Our Contact Information</h2>
              <p className="lead">Feel free to reach out to us through any of the following methods:</p>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> info@edulearn.com</li>
                <li><strong>Phone:</strong> +123-456-7890</li>
                <li><strong>Address:</strong> 123 Learning Street, Knowledge City, Educationland</li>
              </ul>

              {/* Google Map Integration (Iframe) */}
              <div className="map mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6250538490465!2d144.96305791531665!3d-37.81652797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1df537f%3A0xa82d7b7f7c6231f2!2sEduLearn%20Institute!5e0!3m2!1sen!2sin!4v1643322040297!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                  style={{ border: '0' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;