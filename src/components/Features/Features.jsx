import React from 'react';
import { ShoppingCart, Shield, Truck, Package, Search, User } from 'lucide-react';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
    const features = [
        { icon: ShoppingCart, title: "Compra Fácil", description: "Explora el catálogo y agrega productos al carrito fácilmente." },
        { icon: Shield, title: "Pagos Seguros", description: "Métodos de pago seguros y encriptados." },
        { icon: Truck, title: "Envío Rápido", description: "Opciones de envío estándar y express." },
        { icon: Package, title: "Gestión de Pedidos", description: "Rastrea tus pedidos en tiempo real." },
        { icon: Search, title: "Búsqueda Avanzada", description: "Encuentra productos con filtros personalizados." },
        { icon: User, title: "Panel Personal", description: "Administra tu perfil y preferencias." }
    ];

    return (
        <section id="caracteristicas" className="features">
            <h2>Características Principales</h2>
            <p>Todo lo que necesitas para una experiencia de compra excepcional</p>
            <div className="features-grid">
                {features.map((f, i) => <FeatureCard key={i} {...f} />)}
            </div>
        </section>
    );
};

export default Features;
