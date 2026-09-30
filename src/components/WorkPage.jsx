import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

const jobs = [
  {
    company: 'Whitehat Innovative',
    role: 'Software Development Intern',
    period: 'Mar 2025 – Present',
    accent: '#a855f7',
    tag: 'Current',
    duties: [
      'Build and maintain dynamic websites and web applications with Laravel & PHP',
      'Collaborate with developers, contribute to code reviews and system planning',
      'Write clean, testable, and well-documented code',
    ],
    tags: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    company: 'Ugofly Travels & Tours',
    role: 'Travel Advisor Intern',
    period: 'Jul 2024 – Jan 2025',
    accent: '#06b6d4',
    tag: null,
    duties: [
      'Processed and secured Qatar visas for 200+ corporate and leisure clients',
      'Managed documentation from passport collection through final embassy approval',
      'Ensured 100% compliance with Qatar embassy requirements',
    ],
    tags: ['Client Management', 'Documentation', 'Compliance'],
  },
  {
    company: 'Whitehat Innovative',
    role: 'Software Development Intern',
    period: 'Jun 2022 – Dec 2022',
    accent: '#a855f7',
    tag: null,
    duties: [
      'Participated in design and implementation of mobile applications using Flutter',
      'Wrote clean, efficient Dart code and assisted in debugging',
      'Contributed to improving app performance and system architecture',
    ],
    tags: ['Flutter', 'Dart', 'Mobile'],
  },
];

const JobCard = ({ job }) => (
  <div
    style={{
      background: job.accent === '#a855f7' ? 'var(--bg-card-purple)' : 'var(--bg-card-cyan)',
      border: `1px solid ${job.accent === '#a855f7' ? 'var(--border-purple)' : 'var(--border-cyan)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      width: '100%',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = `0 16px 40px ${job.accent}20`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div style={{ marginBottom: '12px' }}>
      <span style={{
        fontSize: '11px',
        padding: '3px 10px',
        background: `${job.accent}18`,
        border: `1px solid ${job.accent}40`,
        borderRadius: '20px',
        color: job.accent,
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        {job.tag && (
          <span style={{
            width: '6px', height: '6px',
            background: '#22c55e',
            borderRadius: '50%',
            display: 'inline-block',
          }} className="pulse-dot" />
        )}
        {job.period}
      </span>
    </div>

    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#fff', marginBottom: '4px', letterSpacing: '-0.01em' }}>
      {job.role}
    </h3>
    <p style={{ fontSize: '13px', color: job.accent, marginBottom: '14px', fontWeight: '500' }}>
      {job.company}
    </p>

    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
      {job.duties.map((duty, i) => (
        <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <span style={{ color: job.accent, flexShrink: 0, marginTop: '2px', fontSize: '12px' }}>▸</span>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{duty}</span>
        </li>
      ))}
    </ul>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {job.tags.map(tag => (
        <span key={tag} style={{
          fontSize: '11px', padding: '3px 9px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '6px', color: 'var(--text-secondary)',
        }}>{tag}</span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ job, index, isMobile }) => {
  const ref = useReveal();
  const isLeft = index % 2 === 0;

  if (isMobile) {
    return (
      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: '24px 1fr',
        gap: '0 16px',
        alignItems: 'flex-start',
      }}>
        {/* Dot column */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '18px' }}>
          <div style={{
            width: '12px', height: '12px',
            borderRadius: '50%',
            background: job.accent,
            boxShadow: `0 0 0 3px ${job.accent}30, 0 0 12px ${job.accent}50`,
            flexShrink: 0,
            zIndex: 2,
          }} />
        </div>
        {/* Card */}
        <div style={{ paddingBottom: '2rem' }}>
          <JobCard job={job} />
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="reveal" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 48px 1fr',
      alignItems: 'center',
      gap: 0,
    }}>
      {/* Left */}
      <div style={{ padding: '0 2rem 0 0', display: 'flex', justifyContent: 'flex-end' }}>
        {isLeft ? <JobCard job={job} /> : <div />}
      </div>
      {/* Dot */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
        <div style={{
          width: '16px', height: '16px',
          borderRadius: '50%',
          background: job.accent,
          boxShadow: `0 0 0 4px ${job.accent}30, 0 0 16px ${job.accent}50`,
        }} />
      </div>
      {/* Right */}
      <div style={{ padding: '0 0 0 2rem' }}>
        {!isLeft ? <JobCard job={job} /> : <div />}
      </div>
    </div>
  );
};

const WorkPage = () => {
  const titleRef = useReveal();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

      <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.8rem,4vw,2.4rem)',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}>
          <span style={{ color: '#a855f7' }}>Experience</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
          My professional journey across different companies and roles.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: isMobile ? '11px' : '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.4) 10%, rgba(6,182,212,0.4) 50%, rgba(168,85,247,0.4) 90%, transparent)',
          transform: isMobile ? 'none' : 'translateX(-50%)',
          zIndex: 1,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0' : '3rem' }}>
          {jobs.map((job, idx) => (
            <TimelineItem key={idx} job={job} index={idx} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;