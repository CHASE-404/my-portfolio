import { useState } from 'react';
import recentImage1 from '../assets/images/recent-image1.png';

function About() {
  const [activeTab, setActiveTab] = useState('professional');
  
  return (
    <div className="about-section container py-5">
      <div className="row mb-4">
        <div className="col-12" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title text-center">About Me</h2>
          <div className="section-subtitle text-center mb-4">Computer Engineering Graduate & Developer</div>
          
          <div className="row align-items-center">
            <div className="col-lg-4 mx-auto mb-4" data-aos="fade-right" data-aos-duration="800">
              <div className="about-image-container text-center">
                <div className="about-image-wrapper larger-image">
                  <div className="image-display">
                    <img 
                      src={recentImage1}
                      alt="Profile image"
                      className="profile-image img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="about-social-links mt-3">
                  <a href="https://github.com/CHASE-404" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/kirk-dave-navarro-0a97b430b/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:navarrokirkdavep@gmail.com" className="social-link">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8" data-aos="fade-left" data-aos-duration="800">
              <p className="about-description">
                Computer Engineering graduate with 1.5 years of software development experience and a passion for creating 
                impactful solutions. Skilled in backend systems, web applications, software testing, and IoT integrations 
                with networking knowledge. Eager to apply my technical knowledge in any computer engineering role 
                and to grow my career in the IT industry.
              </p>
              
              <div className="experience-highlights mb-4">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="highlight-card">
                      <div className="highlight-number">1.5+</div>
                      <div className="highlight-label">Years Experience</div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="highlight-card">
                      <div className="highlight-number">8</div>
                      <div className="highlight-label">Projects Completed</div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="highlight-card">
                      <div className="highlight-number">4</div>
                      <div className="highlight-label">Tech Domains</div>
                      <div className="highlight-sublabel">Web, Testing, IoT, Networking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <div className="about-tabs mt-4">
            <div className="tab-buttons d-flex justify-content-start mb-4">
              <button 
                className={`tab-button ${activeTab === 'professional' ? 'active' : ''}`} 
                onClick={() => setActiveTab('professional')}
              >
                Professional Value
              </button>
              <button 
                className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} 
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button 
                className={`tab-button ${activeTab === 'interests' ? 'active' : ''}`} 
                onClick={() => setActiveTab('interests')}
              >
                Interests
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'professional' && (
                <div>
                  <h3 className="value-title">What I Bring to Your Company</h3>
                  
                  <div className="row value-cards-container g-4">
                    <div className="col-md-6 col-lg-4">
                      <div className="value-card">
                        <div className="value-card-icon">
                          <i className="fas fa-lightbulb"></i>
                        </div>
                        <div className="value-card-content">
                          <h6>Innovative Problem Solving</h6>
                          <p>Applying engineering principles to develop creative solutions for complex technical challenges. I analyze problems methodically and implement efficient solutions.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                      <div className="value-card">
                        <div className="value-card-icon">
                          <i className="fas fa-project-diagram"></i>
                        </div>
                        <div className="value-card-content">
                          <h6>Architecture Design</h6>
                          <p>Creating scalable and maintainable application architectures that support business growth. I design systems with future expansion in mind.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                      <div className="value-card">
                        <div className="value-card-icon">
                          <i className="fas fa-users"></i>
                        </div>
                        <div className="value-card-content">
                          <h6>Team Collaboration</h6>
                          <p>Effectively working with cross-functional teams to deliver high-quality software solutions. I value clear communication and diverse perspectives.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                      <div className="value-card">
                        <div className="value-card-icon">
                          <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <div className="value-card-content">
                          <h6>Performance Optimization</h6>
                          <p>Enhancing application performance and user experience through efficient code and architecture. I identify bottlenecks and improve responsiveness.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                      <div className="value-card">
                        <div className="value-card-icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="value-card-content">
                          <h6>Security Implementation</h6>
                          <p>Implementing robust security measures and following best practices to protect applications. I stay informed about current security threats.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                      <div className="value-card">
                        <div className="value-card-icon">
                          <i className="fas fa-network-wired"></i>
                        </div>
                        <div className="value-card-content">
                          <h6>Networking Expertise</h6>
                          <p>Experience with Cisco technologies, routing protocols, and network infrastructure setup. I understand how applications interact with networks.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h5>Bachelor of Science in Computer Engineering</h5>
                          <div className="timeline-date">2021 - 2025</div>
                          <p>Cebu Institute of Technology - University</p>
                          <p>Focused on software development, embedded systems, and IoT applications.</p>
                          <ul className="timeline-details">
                            <li>Completed coursework in software development, digital systems, and computer architecture</li>
                            <li>Learned programming fundamentals including Data Structures and Discrete Mathematics, establishing a strong foundation for algorithmic problem-solving</li>
                            <li>Developed embedded systems projects using microcontrollers and sensors</li>
                            <li>Studied networking fundamentals including Cisco technologies and routing protocols</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'interests' && (
                <div>
                  <p className="mb-4">Beyond coding, I enjoy exploring various interests that keep me inspired and balanced:</p>
                  <div className="interests-grid expanded-grid">
                    <div className="interest-item expanded-item">
                      <i className="fas fa-gamepad"></i>
                      <span>Video Games</span>
                      <p className="interest-description">I enjoy playing various video games that challenge my strategic thinking and problem-solving skills.</p>
                    </div>
                    <div className="interest-item expanded-item">
                      <i className="fas fa-tv"></i>
                      <span>Anime & TV Shows</span>
                      <p className="interest-description">Watching anime and TV shows helps me unwind while appreciating creative storytelling and visual design.</p>
                    </div>
                    <div className="interest-item expanded-item">
                      <i className="fas fa-cat"></i>
                      <span>Pet Cats</span>
                      <p className="interest-description">Spending time with my cats provides a relaxing break from technical work and teaches me patience.</p>
                    </div>
                    <div className="interest-item expanded-item">
                      <i className="fas fa-newspaper"></i>
                      <span>Tech Articles</span>
                      <p className="interest-description">Reading technical articles helps me stay informed about best practices and industry developments.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="about-cta mt-5 text-center">
            <a href="#portfolio" className="btn btn-outline-primary me-3">View My Projects</a>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;