import React from 'react';
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
