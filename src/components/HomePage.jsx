import React from 'react';
import profileImg from '../assets/images/profile.jpg';
import { useReveal } from '../hooks/useReveal';

const HomePage = ({ setCurrentPage }) => {
  const heroRef = useReveal();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem 2rem',
      position: 'relative',
    }}>
      <div ref={heroRef} className="reveal" style={{ textAlign: 'center', maxWidth: '680px', width: '100%' }}>

        {/* Availability badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          background: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.2)',
          borderRadius: '20px',
          marginBottom: '2rem',
        }}>
          <span style={{
            width: '7px', height: '7px',
            background: '#22c55e',
            borderRadius: '50%',
            display: 'inline-block',
          }} className="pulse-dot" />
          <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: '500' }}>
            Available for work
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1.25rem',
          letterSpacing: '-0.03em',
        }}>
          <span style={{ color: '#a855f7' }}>I build things</span>
          <br />
          <span style={{ color: '#ffffff' }}>people actually use.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          maxWidth: '480px',
          margin: '0 auto 2.25rem',
        }}>
          Full-stack developer specializing in Flutter, React &amp; Laravel.
          Currently pursuing an MSc in Computer Science.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button
            onClick={() => setCurrentPage('projects')}
            style={{
              padding: '11px 26px',
              background: 'linear-gradient(135deg,#a855f7,#7c3aed)',
              border: 'none',
              borderRadius: '28px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(168,85,247,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(168,85,247,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.35)';
            }}
          >
            View Projects
          </button>

          <button
            onClick={() => setCurrentPage('contact')}
            style={{
              padding: '11px 26px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '28px',
              color: '#e0e0e0',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Profile chip */}
        <button
          onClick={() => setCurrentPage('about')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 18px 8px 8px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '32px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.1)';
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <img
            src={profileImg}
            alt="Uchechukwu Divine"
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            About — Uchechukwu Divine
          </span>
          <span style={{ fontSize: '13px', color: 'var(--accent)' }}>→</span>
        </button>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '2rem' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/Uchedivine' },
            { label: 'Email', href: 'mailto:uchedivine65@gmail.com' },
            { label: 'Phone', href: 'tel:+2349133261236' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomePage;