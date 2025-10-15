import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { question: "¿Cómo puedo registrarme en Creamueble?", answer: "Haz clic en el botón 'Registrarse'..., verifica tu correo." },
        { question: "¿Qué métodos de pago aceptan?", answer: "Tarjetas de crédito/débito, transferencias y PayPal." },
        { question: "¿Cuánto tarda el envío?", answer: "Estándar 5-7 días hábiles, express 2-3 días." },
        { question: "¿Puedo rastrear mi pedido?", answer: "Sí, desde 'Mis Pedidos' verás el estado en tiempo real." },
        { question: "¿Qué hago si olvidé mi contraseña?", answer: "En inicio de sesión haz clic en '¿Olvidó su contraseña?'." },
        { question: "¿Cómo contacto con soporte técnico?", answer: "soporte@creamueble.com, teléfono o el formulario de contacto." }
    ];

    return (
        <section className="faq-section section" id="faq">
            <div className="container-max">
                <div className="section-heading">
                    <h2>Preguntas Frecuentes</h2>
                    <p>Encuentra respuestas rápidas a las dudas más comunes</p>
                </div>

                <div className="faq-list">
                    {faqs.map((f, i) => (
                        <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
                            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                <span>{f.question}</span>
                                <span className="faq-icon">{openIndex === i ? <ChevronUp /> : <ChevronDown />}</span>
                            </button>
                            {openIndex === i && <div className="faq-answer">{f.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
