import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Col 1 — Brand */}
                    <div className="footer-col brand">
                        <div className="footer-logo">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 3h12l4 6-10 13L2 9z"></path>
                            </svg>
                            <span className="brand-name">RationShield</span>
                        </div>
                        <p className="tagline">Every Grain Matters</p>
                        <div className="sdg-badges">
                            <span className="sdg-pill sdg-1">SDG 1</span>
                            <span className="sdg-pill sdg-2">SDG 2</span>
                            <span className="sdg-pill sdg-12">SDG 12</span>
                            <span className="sdg-pill sdg-16">SDG 16</span>
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Public Dashboard</a></li>
                            <li><a href="#">Activate</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Col 3 — Contact */}
                    <div className="footer-col">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-label">Helpline:</span>
                                <span className="contact-value">1800-425-2977</span>
                            </li>
                            <li>
                                <span className="contact-label">SMS:</span>
                                <span className="contact-value">7738 29 2222</span>
                            </li>
                            <li>
                                <span className="contact-label">Email:</span>
                                <a href="mailto:support@rationshield.gov.in" className="contact-value">support@rationshield.gov.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4 — Hackathon Note */}
                    <div className="footer-col hackathon">
                        <h4 className="footer-title">About</h4>
                        <p className="hack-text">Developed during 24-Hour Governance Hackathon</p>
                        <p className="copy-text">© 2026 RationShield – Andhra Pradesh</p>
                        <div className="hack-badge">🏆 Hackathon Project</div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© 2026 RationShield | Built for transparency, powered by blockchain and citizen voice.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
