import { useState } from 'react';
import '../assets/contact.css';

function Contact() {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Here you would typically add code to send the email
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div data-aos="fade-up">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle text mb-4">
        Feel free to reach out for collaborations, opportunities, or just to say hello!
      </p>

      <div className="contact-container">
        <div className="contact-info-column">
          <div className="contact-card">
            <h3 className="contact-card-title">Contact Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <a href="mailto:navarrokirkdavep@gmail.com">navarrokirkdavep@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>09934329467 / 09667802863</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info-content">
                <h4>Location</h4>
                <p>Cebu City, Philippines</p>
              </div>
            </div>

            <div className="contact-resume-section">
              <h4>Resume</h4>
              <p>
                Come check out my resume and see what can I offer my services to your Company
              </p>
              <a href="/Navarro_KirkDave_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-download-btn">
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-column">
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="form-success-message">
                <i className="fas fa-check-circle"></i>
                <p>Your message has been sent successfully!</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your full name?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="send-message-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span><i className="fas fa-spinner fa-spin"></i> SENDING...</span>
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;