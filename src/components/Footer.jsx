import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container-max footer-grid">
                <div>
                    <h3>Creamueble</h3>
                    <p className="muted">Tu plataforma de confianza para comprar y vender muebles en línea</p>
                </div>

                <div>
                    <h4>Navegación</h4>
                    <ul className="footer-list">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#caracteristicas">Características</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Categorías</h4>
                    <ul className="footer-list">
                        <li>Salas</li><li>Comedores</li><li>Dormitorios</li><li>Oficina</li>
                    </ul>
                </div>

                <div>
                    <h4>Legal</h4>
                    <ul className="footer-list">
                        <li>Términos y Condiciones</li>
                        <li>Política de Privacidad</li>
                        <li>Política de Envíos</li>
                        <li>Devoluciones</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Creamueble. Todos los derechos reservados. · Versión 1.0 - Octubre 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
