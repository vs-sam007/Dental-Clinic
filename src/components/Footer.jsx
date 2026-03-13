import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '100px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>

                    <div>
                        <div style={{ fontSize: '24px', fontWeight: '500', letterSpacing: '0.1em', fontFamily: 'var(--font-serif)', marginBottom: '30px', color: 'var(--text-primary)' }}>
                            LUMINA<span style={{ color: 'var(--accent-teal)' }}>DENT</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: '400' }}>
                            We redefine luxury dental care through empathetic listening, unparalleled precision, and a commitment to your lifelong health.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '30px', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Home', 'Services', 'Our Philosophy', 'Contact'].map(link => (
                                <li key={link} style={{ marginBottom: '16px' }}>
                                    <a href="#" className="hover-target" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.4s ease', fontSize: '15px', fontFamily: 'var(--font-sans)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-teal)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '30px', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Contact</h4>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '12px', fontSize: '15px', fontWeight: '400' }}>123 Caring Avenue</p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px', fontWeight: '400' }}>Beverly Hills, CA 90210</p>
                        <p style={{ color: 'var(--accent-teal)', marginBottom: '12px', fontSize: '15px', fontFamily: 'var(--font-sans)', fontWeight: '500' }}>+1 (800) 123-4567</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '400' }}>hello@luminadent.com</p>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        © {new Date().getFullYear()} LuminaDent. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="#" className="hover-target" style={{ color: 'var(--text-muted)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
                        <a href="#" className="hover-target" style={{ color: 'var(--text-muted)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
