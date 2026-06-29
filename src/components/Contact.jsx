import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = () => {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body    = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:kthakur0578@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-hd sr" data-n="06">
          <h2>Contact<em>.</em></h2>
        </div>

        <div className="c-info-title sr" style={{ transitionDelay: '.02s' }}>Get in touch</div>

        <div className="contact-grid">
          <div className="c-info sr" style={{ transitionDelay: '.05s' }}>
            <p>
              Open to new opportunities, collaborations, and freelance projects.
              Feel free to reach out — I usually respond within 24 hours.
            </p>
            <div className="c-info-links">
              <a href="https://linkedin.com/in/kaushalt18" target="_blank" rel="noopener" className="btn-o">
                <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path fill="#fff" d="M7.116 9.5H4.41v9.586h2.706V9.5zM5.763 8.34c.945 0 1.534-.62 1.534-1.396-.017-.793-.589-1.395-1.516-1.395-.928 0-1.534.602-1.534 1.395 0 .776.589 1.396 1.499 1.396h.017zM19.59 19.086h-.001V13.59c0-2.94-1.572-4.309-3.668-4.309-1.692 0-2.45.93-2.873 1.583v-1.364h-2.706c.036.762 0 9.586 0 9.586h2.706v-5.354c0-.287.02-.573.107-.778.235-.573.768-1.167 1.665-1.167 1.176 0 1.664.882 1.664 2.175v5.124h2.706z"/>
                </svg>
                LinkedIn <span className="arr">→</span>
              </a>
              <a href="https://github.com/kaushalt18" target="_blank" rel="noopener" className="btn-o">
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub <span className="arr">→</span>
              </a>
            </div>
          </div>

          <div className="c-message-box sr" style={{ transitionDelay: '.13s' }}>
            <button
              type="button"
              className={`c-accordion-toggle ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
            >
              <span className="c-accordion-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <span className="c-accordion-label-wrap">
                <span className="c-accordion-label">Send me a message</span>
                <span className="c-accordion-sub">Drop a line, let's build something great</span>
              </span>
              <svg className="c-accordion-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            <div className={`c-accordion-panel ${open ? 'is-open' : ''}`}>
              <div className="c-form">
                <div className="c-form-row">
                  <div className="c-form-field">
                    <label htmlFor="c-name">Name</label>
                    <input id="c-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange}/>
                  </div>
                  <div className="c-form-field">
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange}/>
                  </div>
                </div>
                <div className="c-form-field">
                  <label htmlFor="c-msg">Message</label>
                  <textarea id="c-msg" name="message" placeholder="Your message here..." value={form.message} onChange={handleChange}></textarea>
                </div>
                {error && <p className="c-form-error">{error}</p>}
                <button className="btn-s" onClick={handleSend}>
                  Send Message <span className="arr">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
