import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Olatunji Ayokanmi</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-placeholder">
              <span className="initials">OA</span>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Olatunji <span className="highlight">Ayokanmi</span> Damilola
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer & AI Automation Specialist
            </p>
            <p className="hero-description">
              Building scalable web applications and intelligent workflow automation 
              solutions with modern technologies
            </p>
            <div className="hero-badges">
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">n8n</span>
              <span className="badge">AI Integration</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">👨‍💻</span>
              Professional Profile
            </h2>
            <p className="section-subtitle">
              Passionate developer focused on building impactful solutions
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-card">
              <h3 className="card-title">About Me</h3>
              <p className="card-text">
                I'm a dedicated Full-Stack Developer and AI Automation Specialist with extensive experience 
                in building enterprise-grade applications and intelligent workflow systems. My expertise spans 
                React, Node.js, PostgreSQL, and sophisticated n8n automation workflows.
              </p>
              <p className="card-text">
                As a proud ALX Professional Foundation graduate and 3MTT participant, I combine technical 
                excellence with business understanding to deliver solutions that drive efficiency and innovation.
              </p>
            </div>

            <div className="experience-card">
              <h3 className="card-title">Key Experience</h3>
              <div className="experience-items">
                <div className="experience-item">
                  <div className="exp-icon">⚡</div>
                  <div>
                    <h4>Workflow Automation</h4>
                    <p>5+ successful n8n automation projects</p>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="exp-icon">🔗</div>
                  <div>
                    <h4>Full-Stack Development</h4>
                    <p>React, Node.js, PostgreSQL applications</p>
                  </div>
                </div>
                <div className="experience-item">
                  <div className="exp-icon">🤖</div>
                  <div>
                    <h4>AI Integration</h4>
                    <p>OpenAI, custom models, intelligent systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🛠️</span>
              Technical Expertise
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Frontend</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript (ES6+)</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML5/CSS3</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Backend & Database</h3>
              <div className="skills-list">
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
                    <div className="skill-level" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Automation & AI</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">n8n Workflows</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">OpenAI Integration</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">API Orchestration</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-icon">🚀</span>
              Featured Projects
            </h2>
            <p className="section-subtitle">
              A showcase of my technical capabilities and problem-solving approach
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <span className="project-category">AI Automation</span>
                <span className="project-badge">⚡ Featured</span>
              </div>
              <h3 className="project-title">AI Fraud Detection System</h3>
              <p className="project-description">
                Advanced n8n workflow leveraging machine learning patterns to detect 
                fraudulent transactions in real-time with 99.2% accuracy rate.
              </p>
              <div className="project-tech">
                <span>n8n</span>
                <span>OpenAI</span>
                <span>Node.js</span>
                <span>Security</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/Advanced-Fraud-Detection" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link">
                  <span>GitHub</span>
                </a>
                <a href="https://youtu.be/6eE-1OU0z8k" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link secondary">
                  <span>Video Demo</span>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-category">Full-Stack</span>
              </div>
              <h3 className="project-title">ShopWise E-Commerce</h3>
              <p className="project-description">
                Complete e-commerce platform with AI-powered recommendations, 
                secure authentication, and comprehensive admin dashboard.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/ShopWise" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link">
                  <span>GitHub</span>
                </a>
                <a href="https://damishopwise.netlify.app" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link secondary">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-category">Automation</span>
              </div>
              <h3 className="project-title">Marketing Campaign Automation</h3>
              <p className="project-description">
                AI-powered email marketing system with customer segmentation, 
                personalized content generation, and performance analytics.
              </p>
              <div className="project-tech">
                <span>n8n</span>
                <span>Gmail API</span>
                <span>Google Sheets</span>
                <span>AI</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/Marketing_compaign" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link">
                  <span>GitHub</span>
                </a>
                <a href="https://youtu.be/5kwYrjb8zFg" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link secondary">
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <span className="project-category">Full-Stack</span>
              </div>
              <h3 className="project-title">EcoCycle NG</h3>
              <p className="project-description">
                Sustainable waste management platform enabling pickup scheduling, 
                recycling tracking, and real-time monitoring across Nigeria.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Maps</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayokanmii/EcoCycle" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link">
                  <span>GitHub</span>
                </a>
                <a href="https://eco-cycle-ng.vercel.app" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="project-link secondary">
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="section-container">
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
                  <a href="https://www.linkedin.com/in/olatunjiayokanmi" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    linkedin.com/in/olatunjiayokanmi
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Ayokanmii" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    github.com/Ayokanmii
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/+2348103106438" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    +234 810 310 6438
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Ready to Build Something Amazing?</h3>
              <p>
                Let's discuss how we can work together to create innovative 
                solutions and drive digital transformation.
              </p>
              <a href="mailto:olatunjiayokanmii@gmail.com?subject=Portfolio%20Inquiry" 
                 className="cta-button">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">Olatunji Ayokanmi</span>
            </div>
            <p className="footer-tagline">
              Building the future, one line of code at a time
            </p>
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
