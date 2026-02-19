/**
 * Header.jsx — Two-Layer Government Header
 *
 * Layer 1: White logo bar with SVG logo, site name, subtitles, and badge SVGs
 * Layer 2: Colorful 6-tab navigation bar
 */

import React from 'react';
import '../styles/Header.css';
import logoImg from './logo.jpeg';

/* ── Custom SVG Logo Icon — kept as fallback or reference ── */
function LogoIcon() {
    return (
        <svg
            className="header-logo-icon"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Ration-Shield logo"
        >
            {/* Outer circle */}
            <circle cx="28" cy="28" r="26" stroke="#003a8c" strokeWidth="2.5" fill="none" />
            {/* Shield shape */}
            <path
                d="M28 10 L42 17 L42 30 C42 38 35 44 28 47 C21 44 14 38 14 30 L14 17 Z"
                stroke="#00f5ff"
                strokeWidth="2"
                fill="rgba(0,245,255,0.08)"
            />
            {/* Inner triangle accent */}
            <path
                d="M28 20 L36 34 L20 34 Z"
                stroke="#7b2fff"
                strokeWidth="1.5"
                fill="rgba(123,47,255,0.15)"
            />
            {/* Center dot */}
            <circle cx="28" cy="28" r="3" fill="#00f5ff" opacity="0.9" />
        </svg>
    );
}


/* ── Header Component ── */
export default function Header() {
    return (
        <header className="header-root" role="banner">

            {/* ── Layer 1: White Logo Bar ── */}
            <div className="header-logo-bar">
                {/* Left: Logo + site name */}
                <div className="header-logo-left">
                    <img
                        src={logoImg}
                        alt="Government of Andhra Pradesh branding"
                        className="header-logo-img"
                    />
                    <div className="header-site-text">
                        <span className="header-site-name">RATION-SHIELD</span>
                        <span className="header-subtitle-1">Department of Consumer Affairs, Food and Civil Supplies</span>
                        <span className="header-subtitle-2">Government of Andhra Pradesh</span>
                    </div>
                </div>
            </div>

        </header>
    );
}
