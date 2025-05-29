import { useEffect, useRef, useState } from 'react';
import '../assets/portfolio.css';
import { skillCategories as portfolioSkillCategories } from './Portfolio';


function Modal({ project, showModal, setShowModal }) {
    const modalRef = useRef(null);
    const [techStackItems, setTechStackItems] = useState([]);
    
    // Focus modal when opened
    useEffect(() => {
        if (showModal && modalRef.current) {
            modalRef.current.focus();
        }
    }, [showModal]);

    // Parse tech stack and find matching icons
    useEffect(() => {
        if (project && project.techStack) {
        // Parse tech stack string into array
            const techNames = project.techStack.split('·').map(item => item.trim());
        // Create a flattened array of all skills from skillCategories
            const allSkills = portfolioSkillCategories.flatMap(category => category.skills);
        // Find matching icons for each tech
            const techItems = techNames.map(techName => {
                // First try exact match (case insensitive)
                let matchedSkill = allSkills.find(skill => 
                    skill.name.toLowerCase() === techName.toLowerCase()
                );
                
                // If no exact match and not found yet, try more careful partial matching
                if (!matchedSkill) {
                    // Special case for Capacitor
                    if (techName.toLowerCase().includes('capacitor')) {
                        matchedSkill = allSkills.find(skill => 
                            skill.name.toLowerCase().includes('capacitor')
                        );
                    } else {
                        matchedSkill = allSkills.find(skill => {
                            // For single letter skills like 'C', only match exactly
                            if (skill.name.length === 1) {
                                return skill.name.toLowerCase() === techName.toLowerCase();
                            }
                            
                            // For multi-letter skills, check if tech name contains the full skill name as a word
                            // This prevents 'React' from matching 'C' but allows it to match 'React'
                            const techNameLower = techName.toLowerCase();
                            const skillNameLower = skill.name.toLowerCase();
                            
                            // Check if it's a word boundary match (surrounded by spaces, start/end of string, or non-word chars)
                            return new RegExp(`\\b${skillNameLower}\\b`).test(techNameLower);
                        });
                    }
                }
                
                return matchedSkill ? 
                  { ...matchedSkill, displayName: techName } : 
                  { name: techName, displayName: techName, icon: null };
            });
            setTechStackItems(techItems);
        }
    }, [project])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector('.fb-modal-content');
      if (modal && !modal.contains(event.target) && showModal) {
        if (!event.target.closest('.project-card')) {
          setShowModal(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal, setShowModal]);

  const closeModal = () => setShowModal(false);

  if (!showModal || !project) return null;

  return (
    <div className="fb-modal-overlay">
      <div
        className="fb-modal-container"
        ref={modalRef}
        tabIndex={-1} // make focusable
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="fb-modal-content">
          <header className="fb-modal-header">
            <button
              className="fb-modal-close"
              aria-label="Close modal"
              onClick={closeModal}
            >
              ×
            </button>
          </header>

          <main className="fb-modal-body">
            <section className="fb-modal-profile">
              <div className="fb-modal-profile-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="fb-modal-profile-placeholder">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              <h3 id="modal-title" className="fb-modal-title">
                {project.title}
              </h3>
              {project.subtitle && (
                <h4 className="fb-modal-subtitle">{project.subtitle}</h4>
              )}
            </section>

            <section className="fb-modal-details">
              {project.summary && (
                <div className="fb-modal-detail-item">
                  <strong>Summary:</strong>
                  <p>{project.summary}</p>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="fb-modal-detail-item">
                  <strong>Features:</strong>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="fb-modal-detail-item">
                  <strong>Challenges:</strong>
                  <ul>
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="fb-modal-detail-item">
                <strong>Tech Stack:</strong>
                <div className="modal-tech-container">
                  {techStackItems.map((tech, index) => (
                    <div className="modal-tech-card" key={index}>
                      <div className="modal-tech-icon">
                        {tech.icon ? (
                          tech.isLocalImage ? (
                            <img src={tech.icon} alt={tech.name} className="modal-tech-local-icon" />
                          ) : (
                            <img src={tech.icon} alt={tech.name} className="modal-tech-svg-icon" />
                          )
                        ) : (
                          <div className="modal-tech-placeholder">{tech.name.charAt(0)}</div>
                        )}
                      </div>
                      <div className="modal-tech-label">{tech.displayName}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fb-modal-detail-item">
                <strong>Role:</strong> {project.role}
              </div>

              {project.github && (
                <div className="fb-modal-detail-item">
                  <strong>GitHub:</strong>{' '}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    <i className="fab fa-github"></i> View Repository
                  </a>
                </div>
              )}
            </section>
          </main>

          <footer>
            <button className="fb-modal-button" onClick={closeModal}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;