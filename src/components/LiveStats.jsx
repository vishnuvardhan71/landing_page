import React, { useState, useEffect, useRef } from 'react';
import './LiveStats.css';

const StatCard = ({ target, label }) => {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCount();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const animateCount = () => {
        let start = 0;
        const end = parseFloat(target.replace(/,/g, ''));
        const duration = 2000;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * end);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    };

    const formatNumber = (num) => {
        if (target.includes('.')) {
            // For 89.2 Lakhs etc, handle specially if target is not plain int
            // But requirement says count from 0 to final value
            return num.toLocaleString();
        }
        return num.toLocaleString();
    };

    // Extract unit if present (e.g., Lakhs)
    const unit = target.includes('Lakhs') ? ' Lakhs' : target.includes('Crore') ? ' Crore' : '';
    const displayValue = formatNumber(count) + unit;

    return (
        <div className="stat-card" ref={cardRef}>
            <h3 className="stat-number">{target.includes('.') ? target : formatNumber(count)}</h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const LiveStats = () => {
    const stats = [
        { target: "29,791", label: "Fair Price Shops" },
        { target: "89.2 Lakhs", label: "Ration Cards" },
        { target: "4.42 Crore", label: "Beneficiaries" },
        { target: "26", label: "Districts Covered" }
    ];

    return (
        <section className="live-stats">
            <div className="container">
                <h2 className="section-title">Live Statistics – Andhra Pradesh</h2>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <StatCard key={index} target={stat.target} label={stat.label} />
                    ))}
                </div>
                <p className="stats-footer">Monthly Grain Distributed: ~1.54 Lakh Tonnes</p>
            </div>
        </section>
    );
};

export default LiveStats;
