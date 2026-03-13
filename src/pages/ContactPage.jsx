import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ paddingTop: '180px', flexGrow: 1, paddingBottom: '100px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ textAlign: 'center', marginBottom: '100px' }}
                    >
                        <div style={{ color: 'var(--accent-teal)', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                            We're Here For You
                        </div>
                        <h1 className="title-serif" style={{ fontSize: 'clamp(44px, 5.5vw, 68px)', marginBottom: '32px', lineHeight: '1.2' }}>
                            Begin Your <span style={{ fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-gold)' }}>Journey.</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '540px', margin: '0 auto', lineHeight: '1.8', fontWeight: '400' }}>
                            Schedule a private consultation. Experience dedicated, unhurried appointments focused entirely on your comfort and wellbeing.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', alignItems: 'start' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="glass"
                            style={{ padding: '60px', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(0,0,0,0.05)' }}
                        >
                            <h3 className="title-serif" style={{ fontSize: '32px', marginBottom: '40px' }}>Book an<br />Appointment</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name</label>
                                        <input type="text" style={{ width: '100%', padding: '16px 20px', borderRadius: '0', borderBottom: '1px solid rgba(0,0,0,0.1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', color: 'var(--text-primary)', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }} placeholder="Dr. John Doe" onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                                        <input type="email" style={{ width: '100%', padding: '16px 20px', borderRadius: '0', borderBottom: '1px solid rgba(0,0,0,0.1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', color: 'var(--text-primary)', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s' }} placeholder="john@example.com" onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Interest</label>
                                    <select style={{ width: '100%', padding: '16px 20px', borderRadius: '0', borderBottom: '1px solid rgba(0,0,0,0.1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', color: 'var(--text-primary)', fontSize: '16px', outline: 'none', appearance: 'none', cursor: 'pointer', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}>
                                        <option style={{ background: 'var(--bg-primary)' }}>General Protocol</option>
                                        <option style={{ background: 'var(--bg-primary)' }}>Aesthetic Mastery (Veneers)</option>
                                        <option style={{ background: 'var(--bg-primary)' }}>Implantology</option>
                                        <option style={{ background: 'var(--bg-primary)' }}>Orthodontics (Aligners)</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message (Optional)</label>
                                    <textarea rows="4" style={{ width: '100%', padding: '16px 20px', borderRadius: '0', borderBottom: '1px solid rgba(0,0,0,0.1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', color: 'var(--text-primary)', fontSize: '16px', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s' }} placeholder="How can we assist you?" onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}></textarea>
                                </div>
                                <button type="button" className="btn-magnetic" style={{ marginTop: '20px', alignSelf: 'flex-start' }}>Send Message</button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
                        >
                            <div className="glass" style={{ padding: '40px', borderRadius: '24px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                <h4 style={{ fontSize: '13px', marginBottom: '24px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Contact Information</h4>
                                <p style={{ color: 'var(--text-primary)', fontSize: '24px', marginBottom: '12px', fontFamily: 'var(--font-serif)', fontWeight: '500' }}>+1 (800) 123-4567</p>
                                <p style={{ color: 'var(--text-primary)', fontSize: '20px', fontWeight: '400' }}>hello@luminadent.com</p>
                            </div>

                            <div className="glass" style={{ padding: '40px', borderRadius: '24px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                <h4 style={{ fontSize: '13px', marginBottom: '24px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>The Clinic</h4>
                                <p style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px', fontWeight: '400', lineHeight: '1.6' }}>
                                    123 Caring Avenue<br />
                                    Suite 400<br />
                                    Beverly Hills, CA 90210
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <style>{`
          @media (max-width: 968px) {
            main .container > div:nth-child(2) {
              grid-template-columns: 1fr !important;
            }
            form > div {
                grid-template-columns: 1fr !important;
            }
          }
        `}</style>
            </main>
        </div>
    );
};

export default ContactPage;
