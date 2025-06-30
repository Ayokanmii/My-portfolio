import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: 10 }}>Home</Link>
      <Link to="/about" style={{ margin: 10 }}>About</Link>
      <Link to="/projects" style={{ margin: 10 }}>Projects</Link>
      <Link to="/resume" style={{ margin: 10 }}>Resume</Link>
      <Link to="/contact" style={{ margin: 10 }}>Contact</Link>
    </nav>
  );
}
