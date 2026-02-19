/**
 * Hero.jsx — Advanced Full-Viewport Hero Section
 * 
 * Includes:
 * - Staggered entrance animations
 * - Two-column responsive grid
 * - CSS/SVG Illustration cards
 * - Infinite news marquee banner
 */

import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

/** ── SVG Components ── **/

const WheatIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 12 10 12 22" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4C12 4 17 4 17 2M12 7C12 7 19 7 19 5M12 10C12 10 17 10 17 8M12 4C12 4 7 4 7 2M12 7C12 7 5 7 5 5M12 10C12 10 7 10 7 8" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const BlockchainIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#00d4ff" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#00d4ff" strokeWidth="1.5" />
        <path d="M10 6.5H12V17.5H14" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
);

const ShopIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 3L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M9 21V12H15V21" stroke="#22c55e" strokeWidth="1.5" />
    </svg>
);

const ArrowSVG = () => (
    <svg className="flow-arrow-svg" viewBox="0 0 24 24">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`hero-section ${isVisible ? 'visible' : ''}`} aria-label="Hero">

            <div className="hero-grid">

                {/* ── LEFT COLUMN ── */}
                <div className="hero-left">
                    <div className="hero-eyebrow">
                        <span>🔗 Powered by Blockchain + AI</span>
                    </div>

                    <h1 className="hero-headline">
                        Every Grain Reaches the <span className="highlight">Right Person</span>
                    </h1>

                    <p className="hero-subheadline">
                        Ensuring <span className="orange">4.42 Crore</span> beneficiaries in Andhra Pradesh receive their full food entitlement — powered by <span className="cyan">Blockchain, AI</span>, and citizen voice.
                    </p>

                    <div className="hero-ctas">
                        <a href="#data" className="hero-btn hero-btn--outline">
                            <span aria-hidden="true">📊</span> View Public Data
                        </a>
                        <a href="#login" className="hero-btn hero-btn--primary">
                            <span aria-hidden="true">🔐</span> Activate / Login
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">4.42 Cr</span>
                            <span className="hero-stat-label">Beneficiaries</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">26</span>
                            <span className="hero-stat-label">Districts</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">100 %</span>
                            <span className="hero-stat-label">Blockchain Secured</span>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT COLUMN — Illustration ── */}
                <div className="hero-right">
                    <div className="hero-glow-bg" />

                    <div className="hero-illustration">
                        <div className="hero-card card-1">
                            <div className="hero-card-icon"><WheatIcon /></div>
                            <span className="hero-card-label">Grain</span>
                        </div>

                        <div className="hero-flow-arrow arrow-1">
                            <ArrowSVG />
                        </div>

                        <div className="hero-card card-2">
                            <div className="hero-card-icon"><BlockchainIcon /></div>
                            <span className="hero-card-label">Blockchain</span>
                        </div>

                        <div className="hero-flow-arrow arrow-2">
                            <ArrowSVG />
                        </div>

                        <div className="hero-card card-3">
                            <div className="hero-card-icon"><ShopIcon /></div>
                            <span className="hero-card-label">Ration Shop</span>
                        </div>

                        <div className="hero-flow-arrow arrow-3">
                            <ArrowSVG />
                        </div>

                        <div className="hero-card card-4">
                            <div className="hero-card-icon">
                                <span style={{ fontSize: '32px' }}>👨‍👩‍👧</span>
                            </div>
                            <span className="hero-card-label">Family</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* ── NEWS BANNER ── */}
            <div className="hero-news-banner">
                <span className="news-label">📢 LATEST</span>
                <div className="news-marquee-container">
                    <div className="news-marquee-text">
                        AP doorstep delivery rollback (May 2025). RationShield ensures transparency and accountability across all 22 districts of Andhra Pradesh. &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
                        Blockchain verification enabled for all FPS transactions. &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
                        New AI-driven grievance system launched.
                    </div>
                </div>
            </div>

        </section>
    );
}
