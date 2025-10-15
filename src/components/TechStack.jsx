import React from 'react';
import './TechStack.css';

const TechStack = () => {
    return (
        <section className="techstack section" id="tecnologia">
            <div className="container-max">
                <div className="section-heading">
                    <h2>Tecnología de Vanguardia</h2>
                    <p>Construido con las mejores herramientas del mercado</p>
                </div>

                <div className="tech-grid">
                    <div className="tech-card">
                        <div className="tech-emoji">⚛️</div>
                        <h3>React</h3>
                        <p>Interfaz de usuario moderna y reactiva</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-emoji">🍃</div>
                        <h3>Spring Boot</h3>
                        <p>Backend robusto y escalable</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-emoji">🗄️</div>
                        <h3>MySQL</h3>
                        <p>Base de datos confiable y eficiente</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
