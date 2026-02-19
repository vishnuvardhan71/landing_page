import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom">
                <div className="container footer-content-row">
                    <p>© 2026 RationShield | Built for transparency, powered by blockchain and citizen voice.</p>
                    <div className="footer-mini-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
