import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const WHATSAPP_NUMBER = '2348076624068';
const WHATSAPP_LINK   = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Divine, I came across your portfolio and I'd love to connect!")}`;

const ContactPage = () => {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const formRef  = useReveal();
  const linksRef = useReveal();

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xqewjavp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const links = [
    {
      label: 'GitHub', value: 'github.com/Uchedivine',
      href: 'https://github.com/Uchedivine', accent: '#a855f7', variant: 'purple',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
    },
    {
      label: 'Email', value: 'uchedivine65@gmail.com',
      href: 'mailto:uchedivine65@gmail.com', accent: '#06b6d4', variant: 'cyan',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    },
    {
      label: 'WhatsApp', value: '234 807 662 4068',
      href: WHATSAPP_LINK, accent: '#22c55e', variant: 'green',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    },
    {
      label: 'Phone', value: '+234 913 326 1236',
      href: 'tel:+2349133261236', accent: '#a855f7', variant: 'purple',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    },
  ];

  const inputStyle = {
    width: '100%', padding: '12px 14px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 'var(--radius-md)',
    color: '#fff', fontSize: '14px',
    outline: 'none', transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  const cardBg = {
    purple: { bg: 'var(--bg-card-purple)', border: 'var(--border-purple)' },
    cyan:   { bg: 'var(--bg-card-cyan)',   border: 'var(--border-cyan)'   },
    green:  { bg: 'rgba(34,197,94,0.06)',  border: 'rgba(34,197,94,0.2)' },
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
      <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
        <span className="gradient-text">Get in Touch</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '3rem' }}>
        Have a project in mind or want to work together? I'd love to hear from you.
      </p>

      {/* Contact cards */}
      <div ref={linksRef} className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: '12px', marginBottom: '2.5rem' }}>
        {links.map(link => {
          const s = cardBg[link.variant];
          return (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', flexDirection: 'column', gap: '10px',
                padding: '1.25rem', background: s.bg,
                border: `1px solid ${s.border}`,
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                color: link.accent, transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${link.accent}25`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span>{link.icon}</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: link.accent, marginBottom: '4px' }}>{link.label}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', wordBreak: 'break-all', lineHeight: '1.4' }}>{link.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Form */}
      <div ref={formRef} className="reveal" style={{ background: 'var(--bg-card-purple)', border: '1px solid var(--border-purple)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
        {status === 'sent' ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '22px' }}>✓</div>
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#fff', marginBottom: '6px' }}>Message received!</p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Thanks for reaching out — I'll get back to you shortly.</p>
            <button onClick={() => setStatus('idle')} style={{ marginTop: '20px', padding: '8px 20px', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '20px', color: '#c084fc', fontSize: '13px', cursor: 'pointer' }}>
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.5)'}
                  onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.5)'}
                  onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
            </div>
            <div>
              <label style={{ fontSize: '12px', color: 'var(--text-tertiary)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..."
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.5)'}
                onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            {status === 'error' && (
              <p style={{ fontSize: '13px', color: '#f87171', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', padding: '10px 14px', borderRadius: '8px' }}>
                Something went wrong. Try emailing me directly at uchedivine65@gmail.com
              </p>
            )}
            <button type="submit" disabled={status === 'sending'}
              style={{ padding: '12px 28px', background: status === 'sending' ? 'rgba(168,85,247,0.4)' : 'linear-gradient(135deg,#a855f7,#7c3aed)', border: 'none', borderRadius: '28px', color: '#fff', fontSize: '14px', fontWeight: '600', cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', alignSelf: 'flex-start', boxShadow: '0 4px 20px rgba(168,85,247,0.3)' }}
              onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(168,85,247,0.5)'; }}}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,85,247,0.3)'; }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        )}
      </div>

      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '1rem', textAlign: 'center' }}>
        Or jump straight to WhatsApp —{' '}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: '#22c55e', textDecoration: 'none' }}>
          open chat ↗
        </a>
      </p>
    </div>
  );
};

export default ContactPage;