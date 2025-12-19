import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-symbol">◉</span>
            <span className="logo-text">Olatunji Ayokanmi</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certificates" className="nav-link">Certificates</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-" 
              className="resume-btn"
              download
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? "hamburger open" : "hamburger"}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certificates" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          <a 
            href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-" 
            className="mobile-resume-btn"
            download
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="profile-image">
              <div className="image-circle">
                <span className="initials">OA</span>
              </div>
              <div className="status-badge">
                <span className="status-dot"></span>
                Available for opportunities
              </div>
            </div>
            
            <div className="hero-text">
              <h1 className="hero-title">
                Olatunji <span className="highlight">Ayokanmi</span>
              </h1>
              <h2 className="hero-subtitle">
                Full-Stack Developer & AI Automation Specialist
              </h2>
              <p className="hero-description">
                Building enterprise-grade applications and intelligent workflow automation 
                solutions with React, Node.js, PostgreSQL, and n8n.
              </p>
              
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Automation Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Applications Built</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
              
              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">👨‍💻</span>
              Professional Overview
            </h2>
            <p className="section-subtitle">
              Combining technical expertise with business understanding
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3>Technical Profile</h3>
              <p>
                I am a dedicated Full-Stack Developer with specialized expertise in AI-powered 
                workflow automation using n8n. My work focuses on creating intelligent systems 
                that optimize business processes, enhance operational efficiency, and drive 
                digital transformation.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, complemented 
                by extensive experience in workflow automation and AI integration, I deliver 
                solutions that are not only technically robust but also business-centric.
              </p>
              
              <div className="expertise-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div>
                    <h4>Workflow Automation</h4>
                    <p>5+ n8n automation projects with measurable ROI</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔗</div>
                  <div>
                    <h4>Full-Stack Development</h4>
                    <p>React, Node.js, PostgreSQL enterprise applications</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <div>
                    <h4>AI Integration</h4>
                    <p>OpenAI, custom models, intelligent automation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-sidebar">
              <div className="info-card">
                <h4>Quick Facts</h4>
                <div className="fact-item">
                  <span className="fact-label">Location:</span>
                  <span className="fact-value">Nigeria (Remote)</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Experience:</span>
                  <span className="fact-value">3+ Years</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Education:</span>
                  <span className="fact-value">B.Sc. Computer Science</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Status:</span>
                  <span className="fact-value">Available for hire</span>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/Ayokanmii" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/olatunjiayokanmi" className="social-link" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:olatunjiayokanmii@gmail.com" className="social-link">
                  <span className="social-icon">✉️</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🛠️</span>
              Technical Expertise
            </h2>
          </div>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Frontend Development</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript ES6+</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Tailwind CSS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Backend & Database</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">PostgreSQL</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">RESTful APIs</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '93%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3 className="category-title">Automation & Tools</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">n8n Workflows</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '94%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">OpenAI Integration</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Git & GitHub</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '96%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🚀</span>
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Showcasing technical capabilities and problem-solving approach
            </p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-tag automation-tag">Automation</div>
              <h3 className="project-title">AI Fraud Detection System</h3>
              <p className="project-description">
                Advanced n8n workflow leveraging machine learning patterns to detect 
                fraudulent transactions with 99.2% accuracy in real-time.
              </p>
              <div className="project-tech">
                <span className="tech-tag">n8n</span>
                <span className="tech-tag">OpenAI</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Security</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/Advanced-Fraud-Detection" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <a href="https://youtu.be/6eE-1OU0z8k" target="_blank" rel="noopener noreferrer">
                  Watch Demo
                </a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-tag fullstack-tag">Full-Stack</div>
              <h3 className="project-title">ShopWise E-Commerce</h3>
              <p className="project-description">
                Complete e-commerce platform with AI-powered recommendations, 
                secure authentication, and comprehensive admin dashboard.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">JWT</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/ShopWise" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <a href="https://damishopwise.netlify.app" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-tag automation-tag">Automation</div>
              <h3 className="project-title">Marketing Campaign Automation</h3>
              <p className="project-description">
                AI-powered email marketing system with customer segmentation, 
                personalized content generation, and performance analytics.
              </p>
              <div className="project-tech">
                <span className="tech-tag">n8n</span>
                <span className="tech-tag">Gmail API</span>
                <span className="tech-tag">Google Sheets</span>
                <span className="tech-tag">AI</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/Marketing_compaign" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <a href="https://youtu.be/5kwYrjb8zFg" target="_blank" rel="noopener noreferrer">
                  Watch Demo
                </a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-tag fullstack-tag">Full-Stack</div>
              <h3 className="project-title">EcoCycle NG</h3>
              <p className="project-description">
                Sustainable waste management platform enabling pickup scheduling, 
                recycling tracking, and real-time monitoring across Nigeria.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Maps</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/EcoCycle" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <a href="https://eco-cycle-ng.vercel.app" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section certificates-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">📜</span>
              Professional Certifications
            </h2>
            <p className="section-subtitle">
              Formal recognition of technical skills and professional development
            </p>
          </div>
          
          <div className="certificates-grid">
            <div className="certificate-card">
              <div className="certificate-icon">🏆</div>
              <h3 className="certificate-title">3MTT Nigeria Graduate</h3>
              <p className="certificate-org">3MTT Nigeria Program</p>
              <p className="certificate-date">Issued 2024</p>
              <a 
                href="https://drive.google.com/file/d/1klUApH81znCS-C12Lh3rK85PC7_hlxrJ/preview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>
            
            <div className="certificate-card">
              <div className="certificate-icon">🎓</div>
              <h3 className="certificate-title">ALX Professional Certificate</h3>
              <p className="certificate-org">ALX Africa</p>
              <p className="certificate-date">Issued 2023</p>
              <a 
                href="https://drive.google.com/file/d/1QyvKHeTZbfvEI_DwfOs_V1heciHGz9Vu/preview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>
            
            <div className="certificate-card">
              <div className="certificate-icon">🤖</div>
              <h3 className="certificate-title">Microsoft AI Fundamentals</h3>
              <p className="certificate-org">Microsoft</p>
              <p className="certificate-date">Issued 2023</p>
              <a 
                href="https://drive.google.com/file/d/1qE8MKCwvV5rMk-QJkstCgcLIo9Rkke_N/preview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>
            
            <div className="certificate-card">
              <div className="certificate-icon">📄</div>
              <h3 className="certificate-title">B.Sc. Computer Science</h3>
              <p className="certificate-org">University</p>
              <p className="certificate-date">Issued 2022</p>
              <a 
                href="https://drive.google.com/file/d/1Cg9nwsiRVdfM-M4ILJqF2PyqedQqkDMZ/preview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">📬</span>
              Get In Touch
            </h2>
            <p className="section-subtitle">
              Available for new opportunities and collaborations
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:olatunjiayokanmii@gmail.com">
                    olatunjiayokanmii@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/olatunjiayokanmi
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer">
                    github.com/Ayokanmii
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/+2348103106438" target="_blank" rel="noopener noreferrer">
                    +234 810 310 6438
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-symbol">◉</span>
              <span className="logo-text">Olatunji Ayokanmi</span>
            </div>
            <p className="footer-tagline">
              Building intelligent solutions for a digital world
            </p>
            
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <a href="#certificates">Certificates</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
