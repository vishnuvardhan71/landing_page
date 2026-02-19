import React from 'react';
import './ImpactStories.css';

const QuoteCard = ({ name, role, quote, initials, type }) => {
    return (
        <div className="quote-card">
            <span className="quote-mark">"</span>
            <p className="quote-text">{quote}</p>
            <div className="quote-footer">
                <div className="avatar-circle">{initials}</div>
                <div className="person-info">
                    <span className="person-name">{name}</span>
                    <span className="person-role">{role}</span>
                </div>
            </div>
            <div className={`type-tag ${type.toLowerCase()}`}>{type}</div>
        </div>
    );
};

const ImpactStories = () => {
    const stories = [
        {
            name: "Lakshmi Devi, 67",
            role: "Beneficiary – Tirupati",
            quote: "For the first time, I received my full 35kg wheat.",
            initials: "LD",
            type: "Beneficiary"
        },
        {
            name: "District Collector – ASR",
            role: "Official",
            quote: "23 ghost beneficiaries removed. ₹5.2L saved annually.",
            initials: "DC",
            type: "Official"
        },
        {
            name: "Ramulu – Paderu",
            role: "Beneficiary",
            quote: "I don't own a smartphone but filed complaint via SMS.",
            initials: "RP",
            type: "Beneficiary"
        }
    ];

    return (
        <section className="impact-stories">
            <div className="container">
                <h2 className="section-title">💬 Real Impact, Real Stories</h2>
                <div className="stories-grid">
                    {stories.map((story, index) => (
                        <QuoteCard key={index} {...story} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStories;
