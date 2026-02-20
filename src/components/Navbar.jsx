import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const scrollToSection = (e, id) => {
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Let the default link behavior take over or use navigate
            // navigate(`/#${id}`); 
        }
    };

    return (
        <nav className="navbar-root">
            <div className="navbar-container">
                {/* LEFT — Logo */}
                <div className="nav-logo" onClick={() => {
                    if (location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        navigate('/');
                    }
                }} style={{ cursor: 'pointer' }}>
                    <svg
                        className="nav-logo-icon"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 28C16 28 16 12 16 4"
                            stroke="#f97316"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M16 10C16 10 24 10 24 6M16 16C16 16 26 16 26 12M16 22C16 22 22 22 22 18M16 10C16 10 8 10 8 6M16 16C16 16 6 16 6 12M16 22C16 22 10 22 10 18"
                            stroke="#f97316"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="nav-logo-text">RationShield</span>
                </div>

                {/* CENTER — Links */}
                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a onClick={(e) => {
                        if (location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            navigate('/');
                        }
                    }}
                        href="/"
                        className={isActive('/') ? 'active' : ''}>Home</a>
                    <span className="nav-divider">|</span>
                    <a href="/#dashboard"
                        onClick={(e) => scrollToSection(e, 'dashboard')}
                        className="">Public Dashboard</a>
                    <span className="nav-divider">|</span>
                    <a href="/#about"
                        onClick={(e) => scrollToSection(e, 'about')}
                        className="">About</a>
                </div>

                {/* RIGHT — Buttons */}
                <div className="nav-actions">
                    <button className="btn-activate"
                        onClick={() => navigate('/signup')}>
                        Activate account
                    </button>
                    <button className="btn-login-outline"
                        onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>

                {/* MOBILE — Hamburger */}
                <div className="nav-mobile-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✕' : '☰'}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="nav-dropdown open">
                    <a onClick={(e) => {
                        if (location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            navigate('/');
                        }
                        setMenuOpen(false);
                    }} href="/" className="nav-dropdown-link">Home</a>
                    <a href="/#dashboard" onClick={(e) => { scrollToSection(e, 'dashboard'); setMenuOpen(false); }} className="nav-dropdown-link">Public Dashboard</a>
                    <a href="/#about" onClick={(e) => { scrollToSection(e, 'about'); setMenuOpen(false); }} className="nav-dropdown-link">About</a>
                    <div className="nav-dropdown-actions">
                        <button className="btn-activate" onClick={() => { navigate('/signup'); setMenuOpen(false); }}>Activate account</button>
                        <button className="btn-login-outline" onClick={() => { navigate('/login'); setMenuOpen(false); }}>Login</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
