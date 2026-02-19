import React, { useState } from 'react';
import './FraudHeatMap.css';

const FraudHeatMap = () => {
    const [view, setView] = useState('current'); // 'current' or 'predicted'
    const [hoveredDistrict, setHoveredDistrict] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const districtsData = [
        { id: 1, name: "Srikakulam", risk: "low", riskScore: 22, shops: 892, highRisk: 4, grid: { r: 1, c: 9 } },
        { id: 2, name: "Vizianagaram", risk: "low", riskScore: 28, shops: 1021, highRisk: 6, grid: { r: 2, c: 8 } },
        { id: 3, name: "Visakhapatnam", risk: "medium", riskScore: 41, shops: 1843, highRisk: 18, grid: { r: 3, c: 8 } },
        { id: 4, name: "Alluri Sitarama", risk: "high", riskScore: 67, shops: 612, highRisk: 34, grid: { r: 3, c: 7 } },
        { id: 5, name: "Anakapalli", risk: "medium", riskScore: 38, shops: 934, highRisk: 12, grid: { r: 4, c: 7 } },
        { id: 6, name: "Kakinada", risk: "medium", riskScore: 45, shops: 1102, highRisk: 21, grid: { r: 4, c: 8 } },
        { id: 7, name: "East Godavari", risk: "low", riskScore: 31, shops: 1567, highRisk: 9, grid: { r: 5, c: 8 } },
        { id: 8, name: "West Godavari", risk: "low", riskScore: 27, shops: 1423, highRisk: 7, grid: { r: 6, c: 7 } },
        { id: 9, name: "Eluru", risk: "medium", riskScore: 44, shops: 876, highRisk: 16, grid: { r: 5, c: 7 } },
        { id: 10, name: "NTR (Krishna)", risk: "low", riskScore: 33, shops: 1298, highRisk: 11, grid: { r: 6, c: 6 } },
        { id: 11, name: "Palnadu", risk: "medium", riskScore: 52, shops: 743, highRisk: 22, grid: { r: 7, c: 5 } },
        { id: 12, name: "Guntur", risk: "low", riskScore: 29, shops: 1654, highRisk: 8, grid: { r: 7, c: 6 } },
        { id: 13, name: "Bapatla", risk: "medium", riskScore: 47, shops: 698, highRisk: 19, grid: { r: 8, c: 6 } },
        { id: 14, name: "Prakasam", risk: "medium", riskScore: 55, shops: 1134, highRisk: 27, grid: { r: 9, c: 5 } },
        { id: 15, name: "Nellore (SPSR)", risk: "low", riskScore: 35, shops: 1089, highRisk: 10, grid: { r: 10, c: 5 } },
        { id: 16, name: "Tirupati", risk: "low", riskScore: 18, shops: 987, highRisk: 2, grid: { r: 11, c: 5 } },
        { id: 17, name: "Chittoor", risk: "high", riskScore: 63, shops: 1231, highRisk: 42, grid: { r: 11, c: 4 } },
        { id: 18, name: "Annamayya", risk: "medium", riskScore: 49, shops: 612, highRisk: 18, grid: { r: 10, c: 4 } },
        { id: 19, name: "Kadapa (YSR)", risk: "high", riskScore: 71, shops: 1098, highRisk: 51, grid: { r: 9, c: 4 } },
        { id: 20, name: "Nandyal", risk: "medium", riskScore: 53, shops: 876, highRisk: 24, grid: { r: 8, c: 3 } },
        { id: 21, name: "Kurnool", risk: "high", riskScore: 68, shops: 1342, highRisk: 47, grid: { r: 8, c: 2 } },
        { id: 22, name: "Anantapur", risk: "critical", riskScore: 84, shops: 1456, highRisk: 78, grid: { r: 9, c: 2 } },
        { id: 23, name: "Sri Sathya Sai", risk: "critical", riskScore: 89, shops: 934, highRisk: 67, grid: { r: 10, c: 2 } },
        { id: 24, name: "ASR (Tribal)", risk: "critical", riskScore: 91, shops: 612, highRisk: 89, grid: { r: 2, c: 7 } },
        { id: 25, name: "Manyam", risk: "high", riskScore: 72, shops: 423, highRisk: 38, grid: { r: 1, c: 8 } },
        { id: 26, name: "Konaseema", risk: "medium", riskScore: 43, shops: 567, highRisk: 14, grid: { r: 5, c: 9 } },
    ];

    const getRiskColor = (score) => {
        if (score < 40) return "#22c55e"; // low
        if (score < 60) return "#f59e0b"; // medium
        if (score < 80) return "#ef4444"; // high
        return "#7f1d1d"; // critical
    };

    const getRiskStatus = (score) => {
        if (score < 40) return "Low";
        if (score < 60) return "Medium";
        if (score < 80) return "High";
        return "⚠ Critical";
    };

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="fraud-heatmap">
            <div className="container">
                <h2 className="section-title">🗺️ Fraud Risk Heat Map – Andhra Pradesh</h2>

                <div className="toggle-container">
                    <button
                        className={`toggle-btn ${view === 'current' ? 'active' : ''}`}
                        onClick={() => setView('current')}
                    >
                        ● Current Risk
                    </button>
                    <button
                        className={`toggle-btn ${view === 'predicted' ? 'active' : ''}`}
                        onClick={() => setView('predicted')}
                    >
                        ● Predicted Next Month (AI)
                    </button>
                </div>

                <div className="map-wrapper" onMouseMove={handleMouseMove}>
                    <div className="map-grid">
                        {districtsData.map((d) => {
                            const score = view === 'predicted' ? d.riskScore + 10 : d.riskScore;
                            const color = getRiskColor(score);
                            return (
                                <div
                                    key={d.id}
                                    className="district-cell"
                                    style={{
                                        gridRow: d.grid.r,
                                        gridColumn: d.grid.c,
                                        backgroundColor: color
                                    }}
                                    onMouseEnter={() => setHoveredDistrict({ ...d, currentScore: score })}
                                    onMouseLeave={() => setHoveredDistrict(null)}
                                >
                                    <span className="district-name-tiny">{d.name}</span>
                                </div>
                            );
                        })}
                    </div>

                    {hoveredDistrict && (
                        <div
                            className="tooltip"
                            style={{
                                left: mousePos.x + 15,
                                top: mousePos.y + 15,
                                borderLeftColor: getRiskColor(hoveredDistrict.currentScore)
                            }}
                        >
                            <div className="tooltip-header">📍 {hoveredDistrict.name}</div>
                            <div className="tooltip-body">
                                <p>Risk Score: {hoveredDistrict.currentScore}/100</p>
                                <p>Total Shops: {hoveredDistrict.shops.toLocaleString()}</p>
                                <p>High Risk Shops: {hoveredDistrict.highRisk}</p>
                                <p className="status">Status: {getRiskStatus(hoveredDistrict.currentScore)}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="legend">
                    <div className="legend-item"><span className="dot low"></span> Low Risk</div>
                    <div className="legend-item"><span className="dot medium"></span> Medium Risk</div>
                    <div className="legend-item"><span className="dot high"></span> High Risk</div>
                    <div className="legend-item"><span className="dot critical"></span> Critical Risk</div>
                </div>

                <div className="alert-strip">
                    <span>⚠ ASR – 89 high-risk shops</span>
                    <span>⚠ Chittoor – 42 under monitoring</span>
                </div>
            </div>
        </section>
    );
};

export default FraudHeatMap;
