import { useState } from 'react';

const Contact = () => {
  const [open, setOpen]   = useState(false);
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent]   = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = () => {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body    = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:kthakur0578@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-hd sr" data-n="06">
          <h2>Contact<em>.</em></h2>
        </div>

        <div className="ca-wrap sr" style={{ transitionDelay: '.05s' }}>
          {/* Accordion header */}
          <button className={`ca-header${open ? ' ca-open' : ''}`} onClick={() => setOpen(o => !o)}>
            <span className="ca-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </span>
            <span className="ca-label">Send me a message</span>
            <span className="ca-chevron">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>

          {/* Collapsible form */}
          <div className={`ca-body${open ? ' ca-body-open' : ''}`}>
            <div className="ca-form">
              <div className="ca-row">
                <div className="ca-field">
                  <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
                </div>
                <div className="ca-field">
                  <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="ca-field">
                <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={4} />
              </div>
              {error && <p className="ca-error">{error}</p>}
              {sent  && <p className="ca-sent">✓ Opening your mail client…</p>}
              <button className="ca-send" onClick={handleSend}>
                Send <span className="arr">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
