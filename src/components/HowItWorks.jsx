import React from 'react';
import './HowItWorks.css';

const StepCard = ({ number, icon, title, body, color }) => {
    return (
        <div className="step-card">
            <span className="step-number" style={{ backgroundColor: '#FF9933' }}>{number}</span>
            <div className="icon-container" style={{ backgroundColor: `${color}1F` }}>
                {icon}
            </div>
            <h3 className="step-title">{title}</h3>
            <p className="step-body">{body}</p>
        </div>
    );
};

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Blockchain Ledger",
            body: "Every ration transaction becomes a permanent digital record — tamper-proof and publicly verifiable.",
            color: "#06b6d4",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            )
        },
        {
            number: 2,
            title: "AI Risk Detection",
            body: "Machine learning identifies stock mismatches, ghost beneficiaries, and forced cash substitution patterns.",
            color: "#FF9933",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7L12 2 5 15a7 7 0 0 0 7 7z"></path>
                </svg>
            )
        },
        {
            number: 3,
            title: "Citizen Voice",
            body: "SMS and voice complaint system in Telugu & English — no smartphone required.",
            color: "#138808",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#138808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="how-it-works" id="about">
            <div className="container">
                <h2 className="section-title">⚙️ How It Works</h2>
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
