import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="hero-content">
                <h1>Bienvenido a <span>Creamueble</span></h1>
                <p>Tu plataforma de comercio electrónico para comprar y vender muebles en línea de forma segura e intuitiva</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Registrarse Ahora</button>
                    <button className="btn-secondary">Ver Catálogo</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
