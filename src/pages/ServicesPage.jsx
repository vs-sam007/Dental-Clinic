import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
    const treatments = [
        {
            title: "Comprehensive Examinations",
            desc: "Our diagnostic approach utilizes 3D imaging and AI-assisted analysis to identify concerns before they become problems, ensuring a foundation of perfect oral health.",
            icon: "🔍"
        },
        {
            title: "Implantology & Restoration",
            desc: "We use biocompatible titanium and ceramic implants to permanently restore function and aesthetics. Each restoration is digitally milled to match your natural tooth structure.",
            icon: "🧬"
        },
        {
            title: "Aesthetic Design & Veneers",
            desc: "Achieve the perfect, natural-looking smile with ultra-thin porcelain veneers. We analyze your facial symmetry to design a smile that enhances your unique features.",
            icon: "✨"
        },
        {
            title: "Periodontal Therapy",
            desc: "Advanced laser treatments for periodontal health that are minimally invasive and highly effective, promoting rapid healing and long-term tissue stability.",
            icon: "⚡"
        }
    ];

    return (
        <>
            <main style={{ paddingTop: '150px', minHeight: '100vh' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h1 className="title-serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '20px' }}>
                            Advanced <span className="text-gradient">Treatments.</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                            We offer a complete spectrum of premium dental services, leveraging the latest clinical technology and materials to provide unparalleled results.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', paddingBottom: '100px' }}>
                        {treatments.map((item, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                key={idx}
                                className="glass"
                                style={{ padding: '40px', borderRadius: '24px', display: 'flex', gap: '30px', alignItems: 'flex-start' }}
                            >
                                <div style={{ fontSize: '48px', background: 'var(--primary-light)', padding: '20px', borderRadius: '20px', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.7' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ServicesPage;
