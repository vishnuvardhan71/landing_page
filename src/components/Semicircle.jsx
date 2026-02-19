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
import '../styles/Semicircle.css';

export default function Semicircle({ onLogin, onSignUp }) {
    return (
        <section className="semi-section" aria-label="Portal access">

            {/* ── Login button removed as requested ── */}

            {/* ── Sign Up — secondary link ── */}
            <div className="semi-signup-row">
                <span className="semi-signup-text">New user?</span>
                <button
                    className="semi-signup-link"
                    onClick={onSignUp}
                    aria-label="Create a new account"
                >
                    Sign Up →
                </button>
            </div>

        </section>
    );
}
