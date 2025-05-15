// Nav.jsx
import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg justify-content-between p-3 mb-2 linkColor" style={{ position: 'sticky' }}>
            <span className="navbar-brand p-1 logo">KIRAN</span>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/resume">Resume</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
