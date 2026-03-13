import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const fadeScale = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
});

const values = [
    {
        icon: '🤝',
        title: 'Empathy First',
        description: 'Every interaction begins with listening. We take time to understand your fears, your goals, and your story before ever picking up an instrument.'
    },
    {
        icon: '🔬',
        title: 'Precision Science',
        description: 'We combine evidence-based protocols with the latest digital diagnostics to ensure every decision is backed by data and delivered with artistry.'
    },
    {
        icon: '🌱',
        title: 'Preventive Focus',
        description: 'We believe the best dentistry is the kind you never need. Our philosophy centers on preserving natural structures and preventing issues before they arise.'
    },
    {
        icon: '✨',
        title: 'Gentle Excellence',
        description: 'Advanced techniques and modern anaesthetics mean treatments that are virtually painless. We redefine what it means to visit the dentist.'
    }
];

const pillars = [
    {
        image: '/philosophy-images/doctor-patient.png',
        title: 'The Human Connection',
        subtitle: 'Trust & Empathy',
        description: 'We believe the foundation of exceptional dentistry is not just technology — it\'s a genuine connection. We listen closely to your needs, explain every option clearly, and empower you to make informed decisions about your care. You are never just a patient here; you are family.',
    },
    {
        image: '/philosophy-images/precision-tech.png',
        title: 'Biomimetic Restoration',
        subtitle: 'Precision & Artistry',
        description: 'We preserve as much natural tooth structure as possible. By mimicking nature\'s own biomechanics with advanced ceramics and composites, our restorations look invisible and last decades longer than traditional methods. Every restoration is a work of precision engineering.',
    },
    {
        image: '/philosophy-images/transparency.png',
        title: 'Radical Transparency',
        subtitle: 'Clarity & Honesty',
        description: 'No surprises, no hidden fees. We walk you through your entire treatment plan using high-resolution 3D scans and intraoral cameras, explaining every step along the way. You\'ll see exactly what we see, and understand exactly why we recommend what we do.',
    },
];

const ExperiencePage = () => {
    return (
        <>
            <main style={{ paddingTop: '150px', minHeight: '100vh' }}>

                {/* ===== HERO SECTION ===== */}
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'center', marginBottom: '100px' }}
                    >
                        <div style={{
                            color: 'var(--accent-teal)',
                            fontSize: '13px',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '24px',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: '600'
                        }}>
                            Our Philosophy
                        </div>
                        <h1 className="title-serif" style={{
                            fontSize: 'clamp(44px, 5.5vw, 68px)',
                            marginBottom: '32px',
                            lineHeight: '1.2',
                        }}>
                            Exceptional Care,{' '}
                            <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-gold)' }}>
                                Genuine Connection.
                            </span>
                        </h1>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '18px',
                            maxWidth: '680px',
                            margin: '0 auto',
                            lineHeight: '1.8',
                            fontWeight: '400'
                        }}>
                            We have completely reimagined the dental visit. Walk into an environment designed to soothe, comfort, and inspire confidence — where world-class expertise meets heartfelt care.
                        </p>
                    </motion.div>
                </div>


                {/* ===== CORE VALUES GRID ===== */}
                <section style={{ padding: '100px 0 120px', background: 'var(--bg-primary)' }}>
                    <div className="container">
                        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 className="title-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '20px', color: 'var(--text-primary)' }}>
                                What We <span className="text-gradient">Believe.</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
                                Our philosophy is built on four core beliefs that guide every decision we make and every patient we serve.
                            </p>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '32px',
                        }}>
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeScale(index * 0.1)}
                                    className="glass"
                                    style={{
                                        borderRadius: '24px',
                                        padding: '44px 32px',
                                        textAlign: 'center',
                                        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                                    }}
                                    whileHover={{ y: -8, boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}
                                >
                                    <div style={{
                                        width: '72px',
                                        height: '72px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(135deg, rgba(76,149,136,0.1), rgba(212,163,115,0.1))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        fontSize: '32px',
                                    }}>
                                        {value.icon}
                                    </div>
                                    <h3 style={{ fontSize: '22px', marginBottom: '14px', color: 'var(--text-primary)', fontWeight: '500' }}>
                                        {value.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '15px' }}>
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ===== OUR APPROACH — ALTERNATING PILLARS ===== */}
                <section style={{ padding: '80px 0 120px', background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 className="title-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', marginBottom: '20px' }}>
                                Our Core <span className="text-gradient">Philosophy.</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '680px', margin: '0 auto', lineHeight: '1.7' }}>
                                We believe that truly exceptional dentistry requires a marriage of high-end technology, biomimetic materials, and an unwavering commitment to your long-term health.
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                            {pillars.map((pillar, index) => {
                                const isReversed = index % 2 !== 0;
                                return (
                                    <motion.div
                                        key={index}
                                        {...fadeUp}
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '60px',
                                            alignItems: 'center',
                                            direction: isReversed ? 'rtl' : 'ltr',
                                        }}
                                        className="pillar-row"
                                    >
                                        {/* Image */}
                                        <motion.div
                                            {...fadeScale(0.15)}
                                            style={{
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                height: '420px',
                                                boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
                                                direction: 'ltr',
                                            }}
                                        >
                                            <img
                                                src={pillar.image}
                                                alt={pillar.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                }}
                                            />
                                        </motion.div>

                                        {/* Text */}
                                        <div style={{ direction: 'ltr' }}>
                                            <div style={{
                                                color: 'var(--accent-teal)',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                marginBottom: '14px',
                                                fontFamily: 'var(--font-sans)',
                                            }}>
                                                {pillar.subtitle}
                                            </div>
                                            <h3 className="title-serif" style={{
                                                fontSize: 'clamp(28px, 3vw, 38px)',
                                                marginBottom: '20px',
                                                color: 'var(--text-primary)',
                                                lineHeight: '1.25'
                                            }}>
                                                {pillar.title}
                                            </h3>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px',
                                            }}>
                                                <div style={{
                                                    width: '3px',
                                                    minHeight: '80px',
                                                    background: 'linear-gradient(to bottom, var(--accent-teal), var(--accent-gold))',
                                                    borderRadius: '4px',
                                                    flexShrink: 0,
                                                }} />
                                                <p style={{
                                                    color: 'var(--text-muted)',
                                                    fontSize: '16px',
                                                    lineHeight: '1.8',
                                                }}>
                                                    {pillar.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* ===== THE EXPERIENCE — COMFORT & SENSORY ===== */}
                <section style={{ padding: '120px 0', background: 'var(--bg-primary)' }}>
                    <div className="container">
                        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '70px' }}>
                            <h2 className="title-serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '20px' }}>
                                The Lumina <span className="text-gradient">Experience.</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
                                From the moment you step through our doors, every detail has been carefully designed for your comfort.
                            </p>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '36px'
                        }}>
                            {/* Comfort Card */}
                            <motion.div
                                {...fadeScale(0)}
                                className="glass"
                                style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                whileHover={{ y: -6, boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}
                            >
                                <div style={{ height: '260px', overflow: 'hidden' }}>
                                    <img
                                        src="/philosophy-images/comfort.png"
                                        alt="Ambient Comfort"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                                <div style={{ padding: '32px' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '14px', color: 'var(--text-primary)', fontWeight: '500' }}>
                                        Ambient Comfort
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '15px' }}>
                                        Our waiting lounge features designer seating, curated art, and complimentary premium beverages. We use specialized air filtration to eliminate clinical odors, replacing them with a subtle, calming signature scent.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Sensory Card */}
                            <motion.div
                                {...fadeScale(0.1)}
                                className="glass"
                                style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                whileHover={{ y: -6, boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}
                            >
                                <div style={{
                                    height: '260px',
                                    background: 'linear-gradient(135deg, rgba(76,149,136,0.08), rgba(212,163,115,0.08))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '64px',
                                }}>
                                    🎧
                                </div>
                                <div style={{ padding: '32px' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '14px', color: 'var(--text-primary)', fontWeight: '500' }}>
                                        Sensory Control
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '15px' }}>
                                        During treatment, you have total control over your environment. We provide noise-canceling headphones with personalized soundscapes, warm blankets, and ergonomic treatment chairs designed for extended comfort.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Lifelong Card */}
                            <motion.div
                                {...fadeScale(0.2)}
                                className="glass"
                                style={{
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                whileHover={{ y: -6, boxShadow: '0 40px 80px rgba(0,0,0,0.08)' }}
                            >
                                <div style={{ height: '260px', overflow: 'hidden' }}>
                                    <img
                                        src="/philosophy-images/lifelong.png"
                                        alt="Lifelong Care"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </div>
                                <div style={{ padding: '32px' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '14px', color: 'var(--text-primary)', fontWeight: '500' }}>
                                        Lifelong Partnership
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '15px' }}>
                                        We aren't just here to fix immediate issues. We view ourselves as your lifelong health partners, dedicated to maintaining your perfect smile and overall wellbeing for years to come.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* ===== CTA SECTION ===== */}
                <section style={{
                    padding: '100px 0',
                    background: 'linear-gradient(135deg, #2C3E50 0%, #34495e 50%, #2C3E50 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Decorative glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(76,149,136,0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        pointerEvents: 'none',
                    }} />

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div {...fadeUp} style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                            <h2 className="title-serif" style={{
                                fontSize: 'clamp(32px, 4.5vw, 52px)',
                                color: '#FFFFFF',
                                marginBottom: '24px',
                                lineHeight: '1.2'
                            }}>
                                Ready to Experience{' '}
                                <span style={{ color: 'var(--accent-gold)', fontStyle: 'italic', fontWeight: '400' }}>
                                    the Difference?
                                </span>
                            </h2>
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '17px',
                                lineHeight: '1.7',
                                marginBottom: '40px',
                            }}>
                                Step into a space where your comfort comes first, your concerns are heard, and your smile is our masterpiece. Schedule your first visit and discover dentistry reimagined.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button
                                    className="btn-magnetic"
                                    style={{ background: 'var(--accent-teal)' }}
                                >
                                    Schedule a Visit
                                </button>
                                <button
                                    className="btn-outline"
                                    style={{
                                        color: '#FFFFFF',
                                        borderColor: 'rgba(255,255,255,0.3)',
                                    }}
                                >
                                    Contact Us
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>

            {/* Responsive styles */}
            <style>{`
                .pillar-row {
                    direction: ltr !important;
                }
                @media (max-width: 968px) {
                    .pillar-row {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ExperiencePage;
