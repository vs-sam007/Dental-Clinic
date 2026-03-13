import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const services = [
    {
        title: 'Aesthetic Mastery',
        desc: 'Porcelain veneers and complete smile makeovers crafted to absolute perfection.',
        icon: '01'
    },
    {
        title: 'Implantology',
        desc: 'State-of-the-art titanium and zirconia implants for permanent solutions.',
        icon: '02'
    },
    {
        title: 'Orthodontics',
        desc: 'Invisible aligners using 3D scanning technology for maximum precision.',
        icon: '03'
    },
    {
        title: 'Laser Therapy',
        desc: 'Painless, minimally invasive gum contouring and treatment.',
        icon: '04'
    }
];

const ServiceCard = ({ service, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className="hover-target"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
        >
            <div
                className="glass"
                style={{
                    padding: '60px 40px',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(0, 0, 0, 0.03)',
                    transition: 'border-color 0.4s ease',
                }}
            >
                <div style={{ position: 'absolute', top: '40px', right: '40px', fontSize: '15px', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)', fontWeight: '500' }}>
                    {service.icon}
                </div>

                <h3 className="title-serif" style={{ fontSize: '32px', marginBottom: '24px', transform: 'translateZ(50px)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', transform: 'translateZ(30px)' }}>{service.desc}</p>

                <div className="card-highlight" style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--accent-teal), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease, height 0.4s ease'
                }} />
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    style={{ textAlign: 'center', marginBottom: '100px' }}
                >
                    <div style={{ color: 'var(--accent-teal)', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                        Comprehensive Care
                    </div>
                    <h2 className="title-serif" style={{ fontSize: 'clamp(44px, 5.5vw, 68px)', marginBottom: '32px', lineHeight: '1.1', color: 'var(--text-primary)' }}>Tailored To<br /><span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-gold)' }}>Your Needs.</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', fontSize: '18px', fontWeight: '400', lineHeight: '1.8' }}>
                        We blend advanced technology with a gentle touch, ensuring every visit is comfortable, transparent, and focused entirely on your lifelong health.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} service={service} index={idx} />
                    ))}
                </div>
            </div>

            <style>{`
        #services .hover-target:hover .glass {
            border-color: rgba(76, 149, 136, 0.3) !important;
        }
        #services .hover-target:hover .card-highlight {
          opacity: 1 !important;
          height: 4px !important;
        }
      `}</style>
        </section>
    );
};

export default Services;
