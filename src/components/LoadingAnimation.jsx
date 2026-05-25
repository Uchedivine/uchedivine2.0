import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => setOpacity(0), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      opacity,
      transition: 'opacity 0.5s ease',
      pointerEvents: opacity === 0 ? 'none' : 'all',
    }}>
      <div style={{
        fontSize: '28px',
        fontWeight: '700',
        background: 'linear-gradient(135deg,#a855f7,#06b6d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '24px',
        letterSpacing: '-0.02em',
      }}>
        UD
      </div>
      <div style={{
        width: '120px',
        height: '2px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg,#a855f7,#06b6d4)',
          borderRadius: '2px',
          animation: 'loadBar 1.4s ease forwards',
        }} />
      </div>
      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;