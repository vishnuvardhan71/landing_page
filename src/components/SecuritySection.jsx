import React from 'react';
import './SecuritySection.css';

const SecurityItem = ({ text }) => (
    <div className="security-item">
        <div className="check-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <span className="security-text">{text}</span>
    </div>
);

const SecuritySection = () => {
    const features = [
        "No biometric storage",
        "OTP-based authentication",
        "PIN-secured login",
        "Immutable blockchain logs",
        "All sensitive data hashed (SHA-256 + bcrypt)"
    ];

    return (
        <section className="security-section">
            <div className="security-grid">
                <div className="security-left">
                    <div className="security-content">
                        <h2 className="security-title">🔐 Secure & Privacy-Focused</h2>
                        <p className="security-subtitle">Built for trust. Designed for inclusion.</p>

                        <div className="shield-illustration">
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#000080" stroke="#06b6d4" strokeWidth="1" />
                                <circle cx="12" cy="11" r="3" stroke="#FF9933" strokeWidth="1.5" />
                                <path d="M12 14V17" stroke="#FF9933" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="security-right">
                    <div className="features-list">
                        {features.map((feature, index) => (
                            <SecurityItem key={index} text={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
