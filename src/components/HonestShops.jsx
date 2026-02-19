import React, { useState } from 'react';
import './HonestShops.css';

const HonestShops = () => {
    const districts = [
        "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "Manyam", "Alluri Sitarama Raju", "Anakapalli", "Kakinada", "Konaseema", "Eluru", "NTR", "Palnadu", "Bapatla", "Nandyal", "Sri Sathya Sai", "Annamayya", "Tirupati"
    ];

    const [selectedDistrict, setSelectedDistrict] = useState("Anantapur");

    const shops = [
        {
            name: "Tirupati Central FPS",
            details: ["0 complaints", "100% stock match", "AI Score: 98.7"],
            badge: "Gold",
            badgeClass: "gold",
            id: "FPS-101"
        },
        {
            name: "Vizag Ration Store",
            details: ["12 months clean record", "AI Score: 96.2"],
            badge: "Platinum",
            badgeClass: "platinum",
            id: "FPS-204"
        },
        {
            name: "Guntur Co-operative",
            details: ["5 years clean record", "AI Score: 94.5"],
            badge: "Diamond",
            badgeClass: "diamond",
            id: "FPS-309"
        }
    ];

    return (
        <section className="honest-shops">
            <div className="container">
                <div className="header-row">
                    <div className="title-group">
                        <h2 className="section-title">🏆 Honest Shops of the Month</h2>
                        <p className="section-subtitle">Top-performing shops with 100% compliance and zero complaints.</p>
                    </div>
                </div>

                <div className="shops-grid">
                    {shops.map((shop, index) => (
                        <div key={index} className={`shop-card ${shop.badgeClass}`}>
                            <span className={`badge-pill ${shop.badgeClass}`}>{shop.badge}</span>
                            <h3 className="shop-name">{shop.name}</h3>
                            <ul className="shop-checklist">
                                {shop.details.map((detail, idx) => (
                                    <li key={idx} className={detail.includes('AI Score') ? 'ai-score' : 'check-item'}>
                                        {detail.includes('AI Score') ? detail : `✔ ${detail}`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};


export default HonestShops;
