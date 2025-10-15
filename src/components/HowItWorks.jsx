import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('cliente');

    return (
        <section id="productos" className="how-section section">
            <div className="container-max">
                <div className="section-heading">
                    <h2>¿Cómo Funciona?</h2>
                    <p>Proceso simple y directo para todos los usuarios</p>
                </div>

                <div className="tabs">
                    <button className={`tab ${activeTab === 'cliente' ? 'active' : ''}`} onClick={() => setActiveTab('cliente')}>Para Clientes</button>
                    <button className={`tab ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>Para Administradores</button>
                </div>

                {activeTab === 'cliente' ? (
                    <div className="flow-grid">
                        <div className="flow-item">
                            <div className="flow-bubble">1</div>
                            <h4>Regístrate</h4>
                            <p>Crea tu cuenta en minutos con tu correo electrónico</p>
                        </div>
                        <div className="flow-item">
                            <div className="flow-bubble">2</div>
                            <h4>Explora</h4>
                            <p>Busca y filtra entre miles de muebles disponibles</p>
                        </div>
                        <div className="flow-item">
                            <div className="flow-bubble">3</div>
                            <h4>Compra</h4>
                            <p>Agrega al carrito y completa tu pago de forma segura</p>
                        </div>
                        <div className="flow-item">
                            <div className="flow-bubble">4</div>
                            <h4>Recibe</h4>
                            <p>Recibe tus muebles en la comodidad de tu hogar</p>
                        </div>
                    </div>
                ) : (
                    <div className="flow-grid">
                        <div className="flow-item">
                            <div className="flow-bubble alt">1</div>
                            <h4>Accede al Panel</h4>
                            <p>Inicia sesión con tu cuenta de administrador</p>
                        </div>
                        <div className="flow-item">
                            <div className="flow-bubble alt">2</div>
                            <h4>Gestiona Productos</h4>
                            <p>Agrega, edita o elimina productos del catálogo</p>
                        </div>
                        <div className="flow-item">
                            <div className="flow-bubble alt">3</div>
                            <h4>Procesa Pedidos</h4>
                            <p>Revisa y actualiza el estado de los pedidos</p>
                        </div>
                        <div className="flow-item">
                            <div className="flow-bubble alt">4</div>
                            <h4>Analiza Datos</h4>
                            <p>Visualiza estadísticas y reportes de ventas</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HowItWorks;
