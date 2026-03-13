import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Our Philosophy', path: '/experience' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: isScrolled ? '15px 5%' : '30px 5%',
                transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            <div className={isScrolled ? 'glass' : ''} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1440px',
                margin: '0 auto',
                padding: isScrolled ? '10px 30px' : '0',
                borderRadius: '100px',
                transition: 'all 0.4s ease'
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-primary)' }} className="hover-target">
                    <div style={{ fontSize: '20px', fontWeight: '500', letterSpacing: '0.1em', fontFamily: 'var(--font-serif)' }}>
                        LUMINA<span style={{ color: 'var(--accent-teal)' }}>DENT</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '40px' }} className="desktop-menu">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="hover-target"
                            style={{
                                color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: '500',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-muted)'}
                        >
                            {location.pathname === item.path && (
                                <span style={{
                                    width: '4px',
                                    height: '4px',
                                    background: 'var(--accent-gold)',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: '-12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)'
                                }} />
                            )}
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button className="btn-magnetic hover-target" style={{ display: 'none', padding: '12px 24px', fontSize: '10px' }}>
                        Client Portal
                    </button>
                    <button
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', zIndex: 1001 }}
                        className="mobile-btn hover-target"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'var(--bg-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '40px',
                        zIndex: 999
                    }}
                    className="mobile-menu-overlay"
                >
                    {navLinks.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                        >
                            <Link
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: location.pathname === item.path ? 'var(--accent-teal)' : 'var(--text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '28px',
                                    fontWeight: '400',
                                    fontFamily: 'var(--font-sans)',
                                    textTransform: 'none',
                                    letterSpacing: '0'
                                }}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="btn-outline" style={{ color: 'var(--text-primary)', borderColor: 'rgba(0,0,0,0.2)' }}>Client Portal</button>
                    </motion.div>
                </motion.div>
            )}

            <style>{`
        @media (min-width: 968px) {
          .desktop-menu { display: flex !important; }
          .btn-magnetic { display: inline-flex !important; }
          .mobile-btn { display: none !important; }
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
