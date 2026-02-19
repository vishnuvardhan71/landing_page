/**
 * Semicircle.jsx — Simplified Portal without the arc
 *
 * Layout: Login button and Sign Up link centered on a white background.
 * The SVG semicircle arc has been removed as requested.
 *
 * Props:
 *   onLogin  {function} — Login button callback
 *   onSignUp {function} — Sign Up callback
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Semicircle.css';

const Semicircle = () => {
    const navigate = useNavigate();

    return (
        <div className="semicircle-container">
            <div className="semicircle-outer">
                <div className="semicircle-inner">
                    <div className="semicircle-content">
                        <h2 className="semicircle-title">CHOOSE YOUR PATH</h2>
                        <p className="semicircle-text">Secure your supply chain with our blockchain solution</p>
                        <div className="semicircle-actions">
                            <button className="arc-btn login-btn" onClick={() => navigate('/login')}>
                                🔑 LOGIN
                            </button>
                            <button className="arc-btn signup-btn" onClick={() => navigate('/signup')}>
                                🚀 SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Semicircle;
