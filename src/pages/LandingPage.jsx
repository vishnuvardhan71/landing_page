import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactStrip from '../components/ImpactStrip';
import LiveStats from '../components/LiveStats';
import HonestShops from '../components/HonestShops';
import DistrictRankings from '../components/DistrictRankings';
import FraudHeatMap from '../components/FraudHeatMap';
import HowItWorks from '../components/HowItWorks';
import RecentAlerts from '../components/RecentAlerts';
import TransparencyReports from '../components/TransparencyReports';
import ImpactStories from '../components/ImpactStories';
import CallToAction from '../components/CallToAction';
import SecuritySection from '../components/SecuritySection';
import Footer from '../components/Footer';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                // Small timeout to ensure components are rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Navbar />
            <Hero />
            <ImpactStrip />
            <LiveStats />
            <HonestShops />
            <DistrictRankings />
            <FraudHeatMap />
            <HowItWorks />
            <RecentAlerts />
            <TransparencyReports />
            <ImpactStories />
            <CallToAction />
            <SecuritySection />
            <Footer />
        </>
    );
};

export default LandingPage;
