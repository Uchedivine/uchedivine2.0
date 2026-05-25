import React from 'react';
import profileImg from '../assets/images/profile.jpg';
import { useReveal } from '../hooks/useReveal';

const skills = [
  { category: 'Mobile',    items: ['Flutter', 'Dart', 'React Native'],           variant: 'purple' },
  { category: 'Frontend',  items: ['React', 'Next.js', 'Tailwind', 'HTML/CSS'],  variant: 'purple' },
  { category: 'Backend',   items: ['Laravel', 'PHP', 'REST APIs'],               variant: 'cyan'   },
  { category: 'Database',  items: ['MySQL', 'Convex', 'Hive'],                   variant: 'cyan'   },
  { category: 'Tools',     items: ['Git', 'GitHub', 'VS Code', 'Figma'],         variant: 'neutral' },
  { category: 'Languages', items: ['JavaScript', , 'Dart', 'PHP'],   variant: 'neutral' },
];

const education = [
  {
    school: 'University of Port Harcourt',
    degree: 'MSc Computer Science',
    period: '2026 – Present',
    accent: '#a855f7',
  },
  {
    school: 'Enugu State University of Science & Technology',
    degree: 'B.Sc. Computer Science',
    period: ' 2019 –  2023',
    accent: '#06b6d4',
  },
];

const AboutPage = () => {
  const bioRef    = useReveal();
  const skillsRef = useReveal();
  const eduRef    = useReveal();

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <img
          src={profileImg}
          alt="Uchechukwu Divine"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(168,85,247,0.4)',
            boxShadow: '0 0 24px rgba(168,85,247,0.25)',
          }}
        />
        <div>
          <h1 style={{
            fontSize: 'clamp(1.8rem,4vw,2.4rem)',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}>
            <span className="gradient-text">Uchechukwu Divine</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            Full-Stack Developer &nbsp;·&nbsp; MSc Computer Science Student
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Uchedivine' },
              { label: 'Email',  href: 'mailto:uchedivine65@gmail.com' },
            ].map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div ref={bioRef} className="reveal" style={{
        background: 'var(--bg-card-purple)',
        border: '1px solid var(--border-purple)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        marginBottom: '2.5rem',
      }}>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
          A highly motivated full-stack developer with hands-on experience building mobile and web
          applications. My preferred stack includes Flutter, Laravel, React, and modern web
          technologies. I thrive in problem-solving and creating seamless user experiences.
        </p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Recently completed the HNG Internship Program across 14 projects spanning mobile,
          frontend, and backend tracks. Currently deepening my academic foundations through an MSc
          in Computer Science, where I enjoy bridging theory with practical engineering.
        </p>
      </div>

      {/* Skills */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.25rem' }}>
        Technical Skills
      </h2>
      <div ref={skillsRef} className="reveal-stagger" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
        gap: '12px',
        marginBottom: '2.5rem',
      }}>
        {skills.map(skill => (
          <div key={skill.category} style={{
            background: skill.variant === 'purple'
              ? 'var(--bg-card-purple)'
              : skill.variant === 'cyan'
                ? 'var(--bg-card-cyan)'
                : 'rgba(255,255,255,0.03)',
            border: `1px solid ${skill.variant === 'purple'
              ? 'var(--border-purple)'
              : skill.variant === 'cyan'
                ? 'var(--border-cyan)'
                : 'rgba(255,255,255,0.07)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
          }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: skill.variant === 'purple'
                ? 'var(--accent)'
                : skill.variant === 'cyan'
                  ? 'var(--accent-cyan)'
                  : 'var(--text-secondary)',
              marginBottom: '10px',
            }}>
              {skill.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {skill.items.map(item => (
                <span key={item} className={`tag tag-${skill.variant === 'neutral' ? 'neutral' : skill.variant}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.25rem' }}>
        Education
      </h2>
      <div ref={eduRef} className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {education.map(edu => (
          <div key={edu.school} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderLeft: `3px solid ${edu.accent}`,
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>
                {edu.school}
              </h3>
              <p style={{ fontSize: '13px', color: edu.accent }}>{edu.degree}</p>
            </div>
            <span style={{
              fontSize: '12px',
              color: 'var(--text-tertiary)',
              background: 'rgba(255,255,255,0.04)',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              whiteSpace: 'nowrap',
            }}>
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;