import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const navItems = [
  { id: 'home',     icon: Home,      label: 'Home'     },
  { id: 'about',    icon: User,      label: 'About'    },
  { id: 'work',     icon: Briefcase, label: 'Work'     },
  { id: 'projects', icon: Code,      label: 'Projects' },
  { id: 'contact',  icon: Mail,      label: 'Contact'  },
];

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      {/* Desktop */}
      <nav style={{
        position: 'fixed',
        top: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(10,10,10,0.7)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '32px',
        padding: '5px',
        display: 'flex',
        gap: '2px',
        zIndex: 1000,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }} className="desktop-nav">
        {navItems.map(item => {
          const active = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={{
                background: active ? 'linear-gradient(135deg,#a855f7,#7c3aed)' : 'transparent',
                color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                border: 'none',
                padding: '7px 18px',
                borderRadius: '24px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: active ? '600' : '400',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                if (!active) {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <item.icon size={14} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Mobile */}
      <nav style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(10,10,10,0.85)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '32px',
        padding: '8px 12px',
        display: 'none',
        gap: '4px',
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }} className="mobile-nav">
        {navItems.map(item => {
          const active = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              style={{
                background: active ? 'linear-gradient(135deg,#a855f7,#7c3aed)' : 'transparent',
                color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                border: 'none',
                padding: '10px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                transition: 'all 0.2s ease',
                minWidth: '52px',
              }}
            >
              <item.icon size={18} />
              <span style={{ fontSize: '9px', fontWeight: active ? '600' : '400' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav  { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navigation;