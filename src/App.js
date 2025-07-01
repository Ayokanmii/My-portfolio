import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>💼 Olatunji Ayokanmi Damilola</h1>
        <p>Frontend, Backend & Full-Stack Developer | React • Node.js • PostgreSQL</p>
      </header>

      <section className="about">
        <h2>👨‍💻 About Me</h2>
        <p>
          I’m a passionate software developer and ALX Professional Foundation graduate,
          focused on building full-stack web applications that solve real-world problems.
          I enjoy creating intuitive user interfaces and efficient backends with modern tech tools.
        </p>
      </section>

      <section className="projects">
        <h2>📂 Projects</h2>
        <ul>
          <li>
            🎬 <strong>Damilola Movie Finder</strong> — A full-stack movie discovery and watchlist app using React, Node.js, Express, PostgreSQL, and TMDb API. <br />
            <a href="https://github.com/Ayokanmii/movie-recommendation-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
          <li>
            ⚛️ <strong>React Hello World App</strong> — An introductory React project focused on basic component rendering.
          </li>
          <li>
            🌐 <strong>Profile HTML Page</strong> — A static HTML/CSS personal landing page for showcasing basic web structure.
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>📬 Contact</h2>
        <p>Email: <a href="mailto:olatunjiayokanmii@gmail.com">olatunjiayokanmii@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer">linkedin.com/in/olatunjiayokanmi</a></p>
        <p>GitHub: <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer">github.com/Ayokanmii</a></p>
      </section>
    </div>
  );
}

export default App;
