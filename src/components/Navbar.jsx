/**
 * Navbar.jsx — Sticky Top Navigation Bar
 * 
 * Features:
 * - Navy blue background with orange accents
 * - Orbitron logo font, Exo 2 link font
 * - Mobile hamburger menu with dropdown
 * - Action buttons (Primary & Outline)
 */

import React, { useState } from 'react';
import '../styles/Navbar.css';

/**
 * Grain/Wheat SVG Icon — Custom orange stalk
 */
function GrainIcon() {
    return (
        <svg
            className="nav-logo-icon"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
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
    );
}

const NAV_LINKS = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about' },
    { label: 'Public Dashboard', href: '#dashboard' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar-root" role="navigation" aria-label="Main navigation">
            <div className="navbar-container">

                {/* ── LEFT — Logo ── */}
                <a href="#home" className="nav-logo">
                    <GrainIcon />
                    <span className="nav-logo-text">RationShield</span>
                </a>

                {/* ── CENTER — Nav Links (Desktop) ── */}
                <div className="nav-links">
                    {NAV_LINKS.map((link, idx) => (
                        <React.Fragment key={link.label}>
                            <a
                                href={link.href}
                                className={`nav-link ${link.active ? 'active' : ''}`}
                            >
                                {link.label}
                            </a>
                            {/* Divider between links, but not after the last one */}
                            {idx < NAV_LINKS.length - 1 && <span className="nav-divider" />}
                        </React.Fragment>
                    ))}
                </div>

                {/* ── RIGHT — Action Buttons (Desktop) ── */}
                <div className="nav-actions">
                    <button className="nav-btn nav-btn--primary">Activate Account</button>
                    <button className="nav-btn nav-btn--outline">Login</button>
                </div>

                {/* ── Mobile Toggle (Hamburger) ── */}
                <button
                    className="nav-mobile-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

            </div>

            {/* ── Mobile Dropdown Menu ── */}
            <div className={`nav-dropdown ${isOpen ? 'open' : ''}`}>
                {NAV_LINKS.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="nav-dropdown-link"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
                <div className="nav-dropdown-actions">
                    <button className="nav-btn nav-btn--primary nav-dropdown-btn">Activate Account</button>
                    <button className="nav-btn nav-btn--outline nav-dropdown-btn">Login</button>
                </div>
            </div>
        </nav>
    );
}
