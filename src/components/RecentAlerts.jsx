import React from 'react';
import './RecentAlerts.css';

const RecentAlerts = () => {
    const alerts = [
        { status: 'resolved', text: 'Tirupati – 150kg wheat recovered', time: '2 hours ago', icon: '✅', color: '#138808' },
        { status: 'resolved', text: 'Vizag – Ghost beneficiary removed', time: '5 hours ago', icon: '✅', color: '#138808' },
        { status: 'resolved', text: 'Guntur – Underweight issue resolved', time: '1 day ago', icon: '✅', color: '#138808' },
        { status: 'investigating', text: 'Kurnool – 5 shops under investigation', time: '2 days ago', icon: '🔍', color: '#f59e0b' },
        { status: 'new', text: 'Anantapur – New complaint filed', time: '3 days ago', icon: '🆕', color: '#FF9933' },
    ];

    return (
        <section className="recent-alerts">
            <div className="container">
                <h2 className="section-title">🔔 Recent Resolved Alerts</h2>

                <div className="timeline">
                    {alerts.map((alert, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="marker-dot" style={{ backgroundColor: alert.color }}></div>
                                {index !== alerts.length - 1 && <div className="marker-line"></div>}
                            </div>
                            <div className="timeline-content">
                                <div className="alert-header">
                                    <span className="status-icon">{alert.icon}</span>
                                    <span className="alert-text">{alert.text}</span>
                                    <span className="time-ago">{alert.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footer-link">
                    <a href="#" className="view-all">View All Alerts →</a>
                </div>
            </div>
        </section>
    );
};

export default RecentAlerts;
