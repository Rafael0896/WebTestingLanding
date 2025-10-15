import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Contact />
            <Footer />
            <FAQ />
        </div>
    );
};

export default App;
