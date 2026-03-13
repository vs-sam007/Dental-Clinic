import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ImageSequence = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        const frameCount = 240;
        const imageUrls = Array.from({ length: frameCount }, (_, i) => 
            `/hero-sequence/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
        );
        
        // Load all images in parallel instead of sequentially
        const imageSlots = new Array(frameCount).fill(null);
        let loadedCount = 0;

        const promises = imageUrls.map((url, index) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => {
                    imageSlots[index] = img;
                    loadedCount++;
                    // Show first frame immediately once it loads
                    if (loadedCount === 1) {
                        setImages([...imageSlots.filter(Boolean)]);
                        setLoaded(true);
                    }
                    resolve();
                };
                img.onerror = resolve;
            });
        });

        Promise.all(promises).then(() => {
            setImages(imageSlots.filter(Boolean));
        });
    }, []);

    useEffect(() => {
        if (images.length === 0 || !canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frameIndex = 0;
        let animationFrameId;
        let lastAutoDrawTime = performance.now();
        const fpsInterval = 1000 / 30; // 30 FPS playback target
        
        // Use first image's aspect ratio
        canvas.width = images[0].width || 800;
        canvas.height = images[0].height || 800;

        const render = (time) => {
            animationFrameId = requestAnimationFrame(render);
            
            const elapsed = time - lastAutoDrawTime;
            
            if (elapsed > fpsInterval && images.length > 0) {
                lastAutoDrawTime = time - (elapsed % fpsInterval);
                
                if (images[frameIndex]) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
                }
                
                // Loop through loaded images
                frameIndex = (frameIndex + 1) % images.length;
            }
        };
        
        animationFrameId = requestAnimationFrame(render);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [images]);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <canvas 
                ref={canvasRef} 
                style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    mixBlendMode: 'multiply' // Adjusts for white backgrounds in JPEGs
                }} 
            />
        </div>
    );
};

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', overflow: 'hidden', background: 'var(--bg-primary)' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '20%', left: '70%', transform: 'translate(-50%, -50%)', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(212,163,115,0.1) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1fr', gap: '40px', alignItems: 'center', height: '100%', width: '100%', position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ color: 'var(--accent-teal)', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px', fontSize: '13px', fontFamily: 'var(--font-sans)' }}
                    >
                        Lumina Dentistry
                    </motion.div>

                    <h1 className="title-serif" style={{ fontSize: 'clamp(48px, 6vw, 84px)', marginBottom: '32px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
                        Exceptional Care,<br />
                        <span className="title-serif" style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', fontStyle: 'italic', fontWeight: '400', color: 'var(--accent-gold)' }}>Genuine Connection.</span>
                    </h1>

                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '480px', fontWeight: '400' }}>
                        Step into a warm, welcoming environment where your comfort is our priority, and world-class dental expertise feels like visiting family.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <button className="btn-magnetic">Schedule a Visit</button>
                        <button className="btn-outline" style={{ border: '1px solid rgba(0,0,0,0.15)', color: 'var(--text-primary)' }}>Meet the Team</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    style={{ height: '700px', width: '100%', position: 'relative', pointerEvents: 'none', transform: 'scale(1.15)' }}
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <ImageSequence />
                    </motion.div>
                </motion.div>

            </div>

            <style>{`
        @media (max-width: 968px) {
          #home .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #home p {
            margin: 0 auto 40px auto;
          }
          #home div[style*="flexWrap: 'wrap'"] {
            justify-content: center;
          }
          #home > div > div:nth-child(2) {
            height: 450px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
