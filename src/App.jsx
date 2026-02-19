/**
 * App.jsx — Root component
 * Assembles Header, Hero, Semicircle, and Footer in a full-page
 * vertical layout. Imports global.css for design tokens and reset.
 */

import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStrip from './components/ImpactStrip';
import LiveStats from './components/LiveStats';
import HonestShops from './components/HonestShops';
import FraudHeatMap from './components/FraudHeatMap';
import DistrictRankings from './components/DistrictRankings';
import HowItWorks from './components/HowItWorks';
import RecentAlerts from './components/RecentAlerts';
import TransparencyReports from './components/TransparencyReports';
import ImpactStories from './components/ImpactStories';
import CallToAction from './components/CallToAction';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <ImpactStrip />
      <LiveStats />
      <HonestShops />
      <FraudHeatMap />
      <DistrictRankings />
      <HowItWorks />
      <RecentAlerts />
      <TransparencyReports />
      <ImpactStories />
      <CallToAction />
      <SecuritySection />
      <Footer />
    </div>
  );
}
