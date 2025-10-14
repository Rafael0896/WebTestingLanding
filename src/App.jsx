import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Footer />
        </div>
    );
};

export default App;
