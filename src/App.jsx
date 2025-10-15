import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Contact from './components/Contact';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Footer />
            <Contact/>
        </div>
    );
};

export default App;
