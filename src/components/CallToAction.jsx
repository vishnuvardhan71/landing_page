import React from 'react';
import './CallToAction.css';

const CTACard = ({ icon, title, children, accentColor }) => {
    return (
        <div className="cta-card" style={{ borderTopColor: accentColor }}>
            <div className="cta-icon-wrapper" style={{ color: accentColor }}>
                {icon}
            </div>
            <h3 className="cta-title">{title}</h3>
            <div className="cta-content">
                {children}
            </div>
        </div>
    );
};

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <h2 className="section-title">🚀 Take Action Now</h2>
                <div className="cta-grid">
                    {/* Column 1 - For Citizens */}
                    <CTACard
                        title="For Citizens"
                        accentColor="#FF9933"
                        icon={(
                            <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        )}
                    >
                        <input type="text" placeholder="Enter Ration Card Number" className="cta-input" />
                        <button className="cta-btn orange">Check Entitlement</button>
                        <p className="cta-small-text">No login required for basic check.</p>
                    </CTACard>

                    {/* Column 2 - For Feature Phones */}
                    <CTACard
                        title="For Feature Phones"
                        accentColor="#138808"
                        icon={(
                            <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                        )}
                    >
                        <div className="sms-box">
                            <code>
                                E-mail: RATION &lt;CardNumber&gt;<br />
                                To: dir_cs@ap.gov.in
                            </code>
                        </div>
                        <p className="cta-small-text">Works on any basic mobile.</p>
                    </CTACard>

                    {/* Column 3 - For All Users */}
                    <CTACard
                        title="Toll Free Helpline"
                        accentColor="#000080"
                        icon={(
                            <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        )}
                    >
                        <div className="helpline-number">1800-425-2977</div>
                        <p className="cta-small-text">Speak in Telugu. File complaint in 2 minutes.</p>
                        <div className="cta-pill green">Available 24×7</div>
                    </CTACard>

                    {/* Column 4 - For Officials */}
                    <div className="cta-card official" style={{ backgroundColor: '#000080', borderTopColor: '#000080' }}>
                        <div className="cta-icon-wrapper" style={{ color: '#ffffff' }}>
                            <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21h18"></path>
                                <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3z"></path>
                                <path d="M19 21v-7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7"></path>
                            </svg>
                        </div>
                        <h3 className="cta-title" style={{ color: '#ffffff' }}>For Officials</h3>
                        <div className="cta-content">
                            <button className="cta-btn outline-white">Admin Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
