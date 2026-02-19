import React from 'react';
import './TransparencyReports.css';

const DownloadCard = ({ icon, title, type, size, date, color }) => {
    return (
        <div className="download-card">
            <div className="file-icon" style={{ color: color }}>
                {icon}
            </div>
            <h3 className="file-title">{title}</h3>
            <p className="file-info">{type} · {size} · {date}</p>
            <button className="download-outline-btn">Download</button>
        </div>
    );
};

const TransparencyReports = () => {
    const reports = [
        {
            title: "Monthly Report",
            type: "PDF",
            size: "2.4 MB",
            date: "Feb 2026",
            color: "#dc2626",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            title: "District Data",
            type: "XLSX",
            size: "1.1 MB",
            date: "Feb 2026",
            color: "#138808",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <rect x="8" y="13" width="8" height="4"></rect>
                    <line x1="12" y1="13" x2="12" y2="17"></line>
                </svg>
            )
        },
        {
            title: "Scheme Performance",
            type: "CSV",
            size: "0.8 MB",
            date: "Feb 2026",
            color: "#0ea5e9",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                    <line x1="8" y1="17" x2="16" y2="17"></line>
                    <line x1="8" y1="9" x2="10" y2="9"></line>
                </svg>
            )
        }
    ];

    return (
        <section className="transparency-reports">
            <div className="container">
                <h2 className="section-title">📁 Transparency Reports</h2>
                <div className="reports-grid">
                    {reports.map((report, index) => (
                        <DownloadCard key={index} {...report} />
                    ))}
                </div>

                <div className="actions-footer">
                    <button className="download-zip-btn">
                        ⬇ Download All Reports (ZIP)
                    </button>
                    <div className="blockchain-badge">
                        🔗 Blockchain Verified
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransparencyReports;
