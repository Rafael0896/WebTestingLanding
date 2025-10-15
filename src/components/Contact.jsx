import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contacto" className="contact-section section">
            <div className="container-max">
                <div className="section-heading" style={{ color: '#fff' }}>
                    <h2 style={{ color: '#fff' }}>Contáctanos</h2>
                    <p style={{ color: '#f3f4f6' }}>Estamos aquí para ayudarte</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <Phone size={32} />
                        <h4>Teléfono</h4>
                        <p>+57 (5) 123-4567</p>
                        <small>Lun-Vie: 8AM-6PM</small>
                    </div>

                    <div className="contact-card">
                        <Mail size={32} />
                        <h4>Correo Electrónico</h4>
                        <p>soporte@creamueble.com</p>
                        <small>Respuesta en 24 horas</small>
                    </div>

                    <div className="contact-card">
                        <div className="socials">
                            <Facebook size={28} />
                            <Instagram size={28} />
                            <Twitter size={28} />
                        </div>
                        <h4>Redes Sociales</h4>
                        <p>@CreamuebleOficial</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
