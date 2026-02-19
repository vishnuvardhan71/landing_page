import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar-root">
            <div className="navbar-container">
                {/* LEFT — Logo */}
                <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
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
                    <a onClick={() => navigate('/')}
                        className={isActive('/') ? 'active' : ''}>Home</a>
                    <span className="nav-divider">|</span>
                    <a href="/#about"
                        className="">About</a>
                    <span className="nav-divider">|</span>
                    <a href="/#dashboard"
                        className="">Public Dashboard</a>
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
                    <a onClick={() => { navigate('/'); setMenuOpen(false); }} className="nav-dropdown-link">Home</a>
                    <a href="/#about" onClick={() => setMenuOpen(false)} className="nav-dropdown-link">About</a>
                    <a href="/#dashboard" onClick={() => setMenuOpen(false)} className="nav-dropdown-link">Public Dashboard</a>
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
