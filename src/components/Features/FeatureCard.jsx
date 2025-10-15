import React from 'react';
import './Features.css';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-icon">
            <Icon size={32} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default FeatureCard;
