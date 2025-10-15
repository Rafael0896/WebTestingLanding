import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import TechStack from './components/TechStack';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Features />
            <TechStack />
            <HowItWorks />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
