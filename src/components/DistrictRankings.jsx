import React, { useState } from 'react';
import './DistrictRankings.css';

const DistrictRankings = () => {
    const [search, setSearch] = useState('');

    const rankings = [
        { rank: 1, district: "Tirupati", compliance: 98, highRisk: 2, trend: "+5%", dir: "up" },
        { rank: 2, district: "Visakhapatnam", compliance: 95, highRisk: 5, trend: "+3%", dir: "up" },
        { rank: 3, district: "Guntur", compliance: 93, highRisk: 8, trend: "+2%", dir: "up" },
        { rank: 4, district: "East Godavari", compliance: 91, highRisk: 9, trend: "+2%", dir: "up" },
        { rank: 5, district: "West Godavari", compliance: 90, highRisk: 7, trend: "+1%", dir: "up" },
        { rank: 6, district: "NTR (Krishna)", compliance: 88, highRisk: 11, trend: "+1%", dir: "up" },
        { rank: 7, district: "Srikakulam", compliance: 87, highRisk: 4, trend: "0%", dir: "none" },
        { rank: 8, district: "Nellore (SPSR)", compliance: 85, highRisk: 10, trend: "-1%", dir: "down" },
        { rank: 9, district: "Vizianagaram", compliance: 84, highRisk: 6, trend: "-1%", dir: "down" },
        { rank: 10, district: "Eluru", compliance: 82, highRisk: 16, trend: "-2%", dir: "down" },
        { rank: 11, district: "Anakapalli", compliance: 81, highRisk: 12, trend: "0%", dir: "none" },
        { rank: 12, district: "Konaseema", compliance: 80, highRisk: 14, trend: "-1%", dir: "down" },
        { rank: 13, district: "Bapatla", compliance: 79, highRisk: 19, trend: "-2%", dir: "down" },
        { rank: 14, district: "Kakinada", compliance: 77, highRisk: 21, trend: "-2%", dir: "down" },
        { rank: 15, district: "Palnadu", compliance: 76, highRisk: 22, trend: "-3%", dir: "down" },
        { rank: 16, district: "Prakasam", compliance: 74, highRisk: 27, trend: "-3%", dir: "down" },
        { rank: 17, district: "Nandyal", compliance: 73, highRisk: 24, trend: "-3%", dir: "down" },
        { rank: 18, district: "Annamayya", compliance: 71, highRisk: 18, trend: "-4%", dir: "down" },
        { rank: 19, district: "Manyam", compliance: 70, highRisk: 38, trend: "-4%", dir: "down" },
        { rank: 20, district: "Alluri Sitarama", compliance: 68, highRisk: 34, trend: "-5%", dir: "down" },
        { rank: 21, district: "Chittoor", compliance: 66, highRisk: 42, trend: "-5%", dir: "down" },
        { rank: 22, district: "Kurnool", compliance: 63, highRisk: 47, trend: "-6%", dir: "down" },
        { rank: 23, district: "Kadapa (YSR)", compliance: 61, highRisk: 51, trend: "-7%", dir: "down" },
        { rank: 24, district: "Anantapur", compliance: 58, highRisk: 78, trend: "-7%", dir: "down" },
        { rank: 25, district: "Sri Sathya Sai", compliance: 55, highRisk: 67, trend: "-8%", dir: "down" },
        { rank: 26, district: "ASR (Tribal)", compliance: 62, highRisk: 89, trend: "-8%", dir: "down" },
    ];

    const filteredRankings = rankings.filter(r =>
        r.district.toLowerCase().includes(search.toLowerCase())
    );

    const getRowClass = (rank) => {
        if (rank <= 3) return 'rank-top';
        if (rank >= 24) return 'rank-bottom';
        return 'rank-mid';
    };

    const getRankIcon = (rank) => {
        if (rank === 1) return '🥇';
        if (rank === 2) return '🥈';
        if (rank === 3) return '🥉';
        return rank;
    };

    const getComplianceColor = (val) => {
        if (val > 90) return '#22c55e';
        if (val > 75) return '#f59e0b';
        return '#dc2626';
    };

    return (
        <section className="district-rankings">
            <div className="container">
                <h2 className="section-title">📊 District Transparency Rankings</h2>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="🔍 Search district..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="rankings-scroll-wrapper">
                    <table className="rankings-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>District</th>
                                <th>Compliance %</th>
                                <th>High Risk Shops</th>
                                <th>Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRankings.map((r) => (
                                <tr key={r.rank} className={getRowClass(r.rank)}>
                                    <td className="rank-cell">
                                        <span className={`rank-badge ${r.rank <= 3 ? 'medal' : ''}`}>
                                            {getRankIcon(r.rank)}
                                        </span>
                                    </td>
                                    <td className="district-name">{r.district}</td>
                                    <td>
                                        <div className="compliance-cell">
                                            <span>{r.compliance}%</span>
                                            <div className="progress-bg">
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${r.compliance}%`,
                                                        backgroundColor: getComplianceColor(r.compliance)
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="risk-count">{r.highRisk}</td>
                                    <td className={`trend-cell ${r.dir}`}>
                                        {r.dir === 'up' && '↑'}
                                        {r.dir === 'down' && '↓'}
                                        {r.dir === 'none' && '→'}
                                        {r.trend}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="last-updated">Last Updated: 18 Feb 2026 – 10:32 AM</p>
            </div>
        </section>
    );
};

export default DistrictRankings;
