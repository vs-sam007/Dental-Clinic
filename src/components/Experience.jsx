import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section id="experience" className="section" ref={ref} style={{ padding: '150px 0', overflow: 'hidden', background: 'var(--bg-primary)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

                <div style={{ position: 'relative', height: '700px' }}>
                    <motion.div
                        style={{
                            y: y1,
                            width: '80%',
                            height: '80%',
                            background: 'url(https://images.unsplash.com/photo-1606265825311-66c3c5b8b5dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80) center/cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            boxShadow: '0 40px 80px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />
                    </motion.div>

                    <motion.div
                        style={{
                            y: y2,
                            width: '65%',
                            height: '65%',
                            background: 'url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80) center/cover',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div style={{ color: 'var(--accent-teal)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '30px', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                        Our Philosophy
                    </div>
                    <h2 className="title-serif" style={{ fontSize: 'clamp(44px, 5.5vw, 60px)', marginBottom: '40px', lineHeight: '1.2', color: 'var(--text-primary)' }}>
                        A Bond Built on<br />
                        <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-gold)' }}>Trust & Empathy.</span>
                    </h2>

                    <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                        <div style={{ width: '2px', background: 'var(--accent-teal)' }} />
                        <div>
                            <p style={{ color: 'var(--text-primary)', fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', fontWeight: '400' }}>
                                We believe the foundation of exceptional dentistry is not just technology, but a genuine connection. We listen closely to your needs and concerns.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.8', fontWeight: '400' }}>
                                From the moment you walk through our doors, you are treated like family. Experience care that is gentle, transparent, and entirely centered around your lifelong wellbeing.
                            </p>
                        </div>
                    </div>
                    <button className="btn-outline" style={{ color: 'var(--text-primary)', borderColor: 'rgba(0,0,0,0.15)' }}>Discover Our Approach</button>
                </motion.div>

            </div>

            <style>{`
        @media (max-width: 968px) {
          #experience .container {
            grid-template-columns: 1fr !important;
          }
          #experience > div > div:first-child {
            height: 500px !important;
            margin-bottom: 60px;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
