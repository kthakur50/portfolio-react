import { useState } from 'react';

const Contact = () => {
  const [open, setOpen]   = useState(false);
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent]   = useState(false);

  const set  = e => setForm({ ...form, [e.target.name]: e.target.value });
  const send = () => {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) { setError('All fields required.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a valid email.'); return; }
    setError('');
    const s = encodeURIComponent(`Portfolio message from ${name}`);
    const b = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:kthakur0578@gmail.com?subject=${s}&body=${b}`;
    setSent(true); setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-hd sr" data-n="06">
          <h2>Contact<em>.</em></h2>
        </div>

        <div className="contact-grid sr" style={{ transitionDelay: '.04s' }}>

          {/* ── Left: info ── */}
          <div className="c-info">
            <p className="c-info-title">Let's work together</p>
            <p>Open to freelance projects, full-time roles, and interesting collaborations. Drop a message or reach out directly.</p>

            <div className="c-info-links">
              <a href="mailto:kthakur0578@gmail.com" className="li-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                kthakur0578@gmail.com <span className="arr">→</span>
              </a>
              <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="li-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M7.116 9.5H4.41v9.586h2.706V9.5zM5.763 8.34c.945 0 1.534-.62 1.534-1.396-.017-.793-.589-1.395-1.516-1.395-.928 0-1.534.602-1.534 1.395 0 .776.589 1.396 1.499 1.396h.017zM19.59 19.086h-.001V13.59c0-2.94-1.572-4.309-3.668-4.309-1.692 0-2.45.93-2.873 1.583v-1.364h-2.706c.036.762 0 9.586 0 9.586h2.706v-5.354c0-.287.02-.573.107-.778.235-.573.768-1.167 1.665-1.167 1.176 0 1.664.882 1.664 2.175v5.124h2.706z"/></svg>
                LinkedIn <span className="arr">→</span>
              </a>
              <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="li-btn">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub <span className="arr">→</span>
              </a>
            </div>
          </div>

          {/* ── Right: accordion form ── */}
          <div className="c-form-side">
            <div className="ca-wrap">
              <button className={`ca-header${open ? ' ca-open' : ''}`} onClick={() => setOpen(o => !o)}>
                <span className="ca-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span className="ca-label">Send me a message</span>
                <span className="ca-chevron">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </button>

              <div className={`ca-body${open ? ' ca-body-open' : ''}`}>
                <div className="ca-form">
                  <div className="ca-row">
                    <div className="ca-field"><input name="name" type="text" placeholder="Name" value={form.name} onChange={set} /></div>
                    <div className="ca-field"><input name="email" type="email" placeholder="Email" value={form.email} onChange={set} /></div>
                  </div>
                  <div className="ca-field"><textarea name="message" placeholder="Message" value={form.message} onChange={set} rows={4} /></div>
                  {error && <p className="ca-error">{error}</p>}
                  {sent  && <p className="ca-sent">✓ Opening your mail client…</p>}
                  <button className="ca-send" onClick={send}>Send <span className="arr">→</span></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
