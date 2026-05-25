import React, { useState } from 'react';
import { ExternalLink, Layers, Globe, Database, Smartphone, Code } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import imgAptitude from '../assets/images/aptitude test card.png';
import imgCrypto from '../assets/images/crypto.png';
import imgChopChop from '../assets/images/chop chop.png';
import imgAudiophile from '../assets/images/audiophile.png';
import imgFramez from '../assets/images/framez.png';
import imgTickets from '../assets/images/tickethub.png';
import imgInventory from '../assets/images/sneaker inventory.png';
import imgTrivia from '../assets/images/tech trivia.png';
import imgBlackFriday from '../assets/images/black friday.png';
import imgTicTacToe from '../assets/images/tictactoe.png';

const projects = [
  { title: 'Bank Aptitude Test', type: 'Full Stack', image: imgAptitude, desc: 'Pixel-perfect aptitude test platform with real-time scoring and performance tracking.', tags: ['Next.js', 'Laravel', 'MySQL'], link: 'https://bank-aptitude-test-frontend.vercel.app/', source: null },
  { title: 'Crypto Wallet App', type: 'Mobile', image: imgCrypto, desc: 'Modern Web3 crypto wallet with real-time price tracking and trend charts.', tags: ['Flutter', 'Dart', 'API Integration'], link: 'https://appetize.io/embed/b_tjsg3n25kl2anr3schm3bc64fa', source: null },
  { title: 'Chop Chop Delivery', type: 'Mobile', image: imgChopChop, desc: 'Food delivery app with real-time order tracking, dynamic menus, and secure payment integration.', tags: ['Flutter', 'Dart', 'API Integration'], link: 'https://appetize.io/embed/b_syr2cowdxmfshowtcna3drvlky', source: null },
  { title: 'Audiophile E-commerce', type: 'Frontend', image: imgAudiophile, desc: 'Pixel-perfect e-commerce platform with a fully functional checkout flow.', tags: ['React', 'Next.js', 'Convex'], link: 'https://audiophile-ecommerce1.netlify.app/', source: null },
  { title: 'Country Currency API', type: 'Backend', desc: 'RESTful API fetching country data and live exchange rates.', tags: ['PHP', 'Laravel', 'MySQL'], link: null, source: null },
  { title: 'Framez Social App', type: 'Mobile', image: imgFramez, desc: 'Mobile social platform with Firebase authentication and real-time feeds.', tags: ['React Native', 'Firebase'], link: 'https://appetize.io/embed/b_o4fc7j2wpfb557k4hezlgsjlwy', source: null },
  { title: 'Multi-Framework Tickets', type: 'Frontend', image: imgTickets, desc: 'Ticket management system built in three different frameworks simultaneously.', tags: ['React', 'Vue.js', 'Twig'], link: 'https://ticket-app-react.netlify.app/', source: null },
  { title: 'Storekeeper Inventory', type: 'Mobile', image: imgInventory, desc: 'Local inventory management with offline-first Hive database.', tags: ['Flutter', 'Hive', 'CRUD'], link: 'https://appetize.io/embed/b_dyvs63gedhnjpwdh27xh6dniya', source: null },
  { title: 'Todo App + Theme Switch', type: 'Frontend', desc: 'Pixel-perfect todo app with light/dark themes and real-time backend integration.', tags: ['React Native', 'Convex', 'Theming'], link: 'https://appetize.io/embed/b_szixceobpvrxapvfwcykgpfqbi', source: null },
  { title: 'Tech Trivia Quiz', type: 'Mobile', image: imgTrivia, desc: 'Interactive quiz with score tracking, countdown timer, and post-game answer review.', tags: ['Flutter', 'Dart', 'Interactive UI'], link: 'https://appetize.io/embed/b_qfsj4e7qy7vkhpmh2ntyluzegi', source: null },
  { title: 'String Analyzer API', type: 'Backend', desc: 'API for palindrome validation, SHA-256 hashing, and character frequency analysis.', tags: ['PHP', 'Laravel', 'REST API'], link: null, source: null },
  { title: 'Black Friday Store', type: 'Frontend', image: imgBlackFriday, desc: 'Promotional e-commerce landing page built for a Black Friday campaign.', tags: ['HTML', 'Tailwind', 'JavaScript'], link: 'https://black-friday1.netlify.app/', source: null },
  { title: 'TicTacToe', type: 'Frontend', image: imgTicTacToe, desc: 'TicTacToe game with multiple difficulty levels powered by a minimax algorithm.', tags: ['React'], link: 'https://uche-tictactoe.netlify.app/', source: null },
];

const filters = [
  { id: 'All', label: 'All Projects', icon: Layers },
  { id: 'Full Stack', label: 'Web Apps', icon: Globe },
  { id: 'Frontend', label: 'Frontend', icon: Code },
  { id: 'Backend', label: 'Backend', icon: Database },
  { id: 'Mobile', label: 'Mobile', icon: Smartphone }
];

const typeAccent = (type) => {
  if (type === 'Mobile') return { bg: 'linear-gradient(180deg, rgba(34, 211, 238, 0.08) 0%, rgba(34, 211, 238, 0) 100%)', badge: 'rgba(34, 211, 238, 0.1)', color: '#22d3ee' };
  if (type === 'Frontend') return { bg: 'linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0) 100%)', badge: 'rgba(168, 85, 247, 0.1)', color: '#c084fc' };
  if (type === 'Full Stack') return { bg: 'linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0) 100%)', badge: 'rgba(168, 85, 247, 0.1)', color: '#c084fc' };
  return { bg: 'linear-gradient(180deg, rgba(161, 161, 170, 0.05) 0%, rgba(161, 161, 170, 0) 100%)', badge: 'rgba(161, 161, 170, 0.1)', color: '#a1a1aa' };
};

const ProjectsPage = () => {
  const [active, setActive] = useState('All');
  const headerRef = useReveal();
  const gridRef = useReveal();

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
      {/* Header Area */}
      <div ref={headerRef} className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>

          <div style={{ maxWidth: '600px' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: '#00d2ff',
              background: '-webkit-linear-gradient(0deg, #c084fc, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Featured Projects
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              A collection of my recent work across web development, mobile applications, and design systems.
            </p>
          </div>

          {/* Filter container */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '6px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.08)',
            gap: '4px',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            maxWidth: '100%'
          }}>
            {filters.map(f => {
              const Icon = f.icon;
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    border: 'none',
                    background: isActive ? 'rgba(168,85,247,0.15)' : 'transparent',
                    color: isActive ? '#c084fc' : 'var(--text-secondary)',
                    fontSize: '13px',
                    fontWeight: isActive ? '600' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <Icon size={14} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="reveal-stagger"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          gap: '24px',
        }}
      >
        {filtered.map((project, idx) => {
          const a = typeAccent(project.type);
          return (
            <div
              key={idx}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              {/* Top Banner Area */}
              <div style={{
                height: '220px',
                background: project.image ? `url(${project.image}) center/cover no-repeat` : a.bg,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                overflow: 'hidden'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: a.badge,
                  color: a.color,
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'lowercase',
                  zIndex: 2,
                  backdropFilter: project.image ? 'blur(8px)' : 'none',
                  border: project.image ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}>
                  {project.type === 'Full Stack' ? 'web' : project.type === 'Frontend' ? 'web' : project.type.toLowerCase()}
                </span>

                {!project.image && (
                  <span style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'rgba(255,255,255,0.03)',
                    letterSpacing: '4px'
                  }}>
                    PROJECT
                  </span>
                )}
              </div>

              {/* Bottom Details Area */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  flex: 1
                }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '4px 12px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '100px',
                      color: 'var(--text-secondary)',
                      fontSize: '11px',
                      fontWeight: '500'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider & Links */}
                <div style={{
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#fff',
                        fontSize: '13px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#c084fc'}
                      onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  ) : (
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-secondary)',
                      fontSize: '13px',
                      fontWeight: '600',
                      opacity: 0.5
                    }}>
                      <ExternalLink size={14} />
                      No Demo
                    </span>
                  )}

                  {/* Placeholder for Source Code, as in the image */}
                  <a
                    href={project.source || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => !project.source && e.preventDefault()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-secondary)',
                      fontSize: '13px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      opacity: project.source ? 1 : 0.5,
                      cursor: project.source ? 'pointer' : 'not-allowed'
                    }}
                    onMouseEnter={e => {
                      if (project.source) e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      if (project.source) e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Code size={14} />
                    Source Code
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;