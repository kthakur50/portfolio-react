// ─── Contact Section ──────────────────────────────────────────────────────
// Left side: short intro text + LinkedIn link.
// Right side: contact form (name, email, message) with a Send button.
//
// BUGFIX: the Send button used to call handleSend(), a function that was
// never defined anywhere in the project — clicking it crashed with
// "handleSend is not defined". The form is now a controlled component
// (useState) with basic validation, and handleSend builds a mailto: link
// pre-filled with the visitor's message so it actually works without a
// backend. Swap this out for a real API call (e.g. EmailJS) if you add one.

import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }
    // Light-touch email format check — not exhaustive, just catches typos
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    // No backend configured yet — fall back to opening the visitor's mail
    // client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:kthakur0578@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-hd sr" data-n="06">
          <h2>Contact<em>.</em></h2>
        </div>

        <div className="contact-grid">
          {/* ── Info panel ─────────────────────────────────────────────── */}
          <div className="c-info sr" style={{ transitionDelay: '.05s' }}>
            <div className="c-info-title">Get in touch</div>
            <p>
              Open to new opportunities, collaborations, and freelance projects.
              Feel free to reach out — I usually respond within 24 hours.
            </p>
            <div className="c-info-links">
              <a
                href="https://linkedin.com/in/kaushalt18"
                target="_blank"
                rel="noopener"
                className="li-btn"
              >
                {/* LinkedIn icon */}
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H17V14.88c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 01-1.979-1.981 1.98 1.98 0 011.979-1.98 1.98 1.98 0 011.98 1.98 1.98 1.98 0 01-1.98 1.981zm1.706 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn <span className="arr">→</span>
              </a>
            </div>
          </div>

          {/* ── Contact form ────────────────────────────────────────────── */}
          <div className="c-form sr" style={{ transitionDelay: '.13s' }}>
            <div className="c-form-row">
              <div className="c-form-field">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="c-form-field">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="c-form-field">
              <label htmlFor="c-msg">Message</label>
              <textarea
                id="c-msg"
                name="message"
                placeholder="Your message here..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {error && <p className="c-form-error">{error}</p>}

            <button className="btn-s" onClick={handleSend}>
              Send Message <span className="arr">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
